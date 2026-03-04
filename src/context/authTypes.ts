export interface User {
  id: number;
  username: string;
  email: string;
  full_name?: string;
  profile_picture?: string;
  address?: string;
  phone_number?: string;
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  allergies?: string;
  diagnoses?: string[];
  alarm_recipient?: string;
  postal_code?: string;
  city?: string;
  [key: string]: any;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => Promise<User>;
  refreshUser: () => Promise<void>;
  PageViews: (page: string) => Promise<void>;
  fetchPageViews: () => Promise<void>;
  pageView: null;
  isAuthenticated: boolean;
}
