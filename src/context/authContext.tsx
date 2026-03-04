import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import type { ReactNode } from "react"

import api from "../service/api";
import type { AuthContextType, User } from "./authTypes";

type PageViewPayload = {
  page: string;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [pageView, setPageView] = useState(null);
  const [loading, setLoading] = useState(true);
  

  /* 🔄 Fetch current page view */
  const fetchPageViews = useCallback(async () : Promise<void> => {
    try {
      const res = await api.get("/total-view/");
      setPageView(res.data);
      return res.data;
    } catch (error) {
      console.error("Failed to fetch page view:", error);
    }
  }, []);

  /* 🔄 Fetch current page view */
  const PageViews = useCallback(async (page: string) : Promise<void> => {
    try {
      await api.post<PageViewPayload>("/track-view/", 
        page, 
     );
    } catch (error) {
      console.error("Failed to track page view:", error);
    }
  }, []);

  /* 🔄 Fetch current user */
  const fetchCurrentUser = useCallback(async (): Promise<User | null> => {
    const token = localStorage.getItem('access');
    try {
      const res = await api.get("/profile/", {
        headers: {Authorization: `Bearer ${token}`}
      });
      return res.data;
    } catch (error) {
      console.error("Failed to fetch user:", error);
      return null;
    }
  }, []);

  /* 🔄 Restore user from token */
  useEffect(() => {
    const restoreUser = async () => {
      const access = localStorage.getItem("access");
      const refresh = localStorage.getItem("refresh");

      if (!access || !refresh) {
        setLoading(false);
        return;
      }

      try {
        // Try to get user profile
        const userData = await fetchCurrentUser();
        if (userData) {
          setUser(userData);
          console.log("User restored from access token", userData);
        } else {
          logout();
        }
      } catch (err: any) {
        // If access token expired, try refresh
        if (err.response?.status === 401) {
          try {
            const refreshRes = await api.post("/token/refresh/", { refresh });
            localStorage.setItem("access", refreshRes.data.access);

            const userData = await fetchCurrentUser();
            if (userData) {
              setUser(userData);
              console.log("User restored via refresh token", userData);
            } else {
              logout();
            }
          } catch {
            logout(); // Both tokens invalid
          }
        } else {
          logout();
        }
      } finally {
        setLoading(false);
      }
    };

    restoreUser();
  }, [fetchCurrentUser]);

  /* 🔐 Login */
  const login = async (username: string, password: string) => {
    const res = await api.post("/token/", { username, password });
    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);

    const userData = await fetchCurrentUser();
    if (userData) {
      setUser(userData);
    } else {
      throw new Error("Failed to fetch user after login");
    }
  };

  /* ✏️ Update user */
  const updateUser = async (updates: Partial<User>): Promise<User> => {
    if (!user) {
      throw new Error("No user is currently logged in");
    }

    try {
      const token = localStorage.getItem("access");
      if (!token) {
        throw new Error("No access token found");
      }

      // Optimistic update for better UX
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);

      // Send update to server
      const response = await api.patch(
        `/profile/${user.id}/`,
        updates,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update with server response data
      const serverUpdatedUser = { ...updatedUser, ...response.data };
      setUser(serverUpdatedUser);
      
      console.log("User updated successfully:", serverUpdatedUser);
      return serverUpdatedUser;
    } catch (error: any) {
      // Revert optimistic update on error
      const originalUser = await fetchCurrentUser();
      if (originalUser) {
        setUser(originalUser);
      }
      
      console.error("Failed to update user:", error);
      throw error;
    }
  };

  /* 🔄 Refresh user data from server */
  const refreshUser = async (): Promise<void> => {
    try {
      const userData = await fetchCurrentUser();
      if (userData) {
        setUser(userData);
        console.log("User data refreshed:", userData);
      } else {
        logout();
      }
    } catch (error) {
      console.error("Failed to refresh user:", error);
      throw error;
    }
  };

  /* 🚪 Logout */
  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout,
    updateUser,
    refreshUser,
    PageViews,
    fetchPageViews,
    pageView,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};