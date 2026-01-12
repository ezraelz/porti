import React from 'react';
import AdminNav from '../adminNav';
import AdminRoutes from '../../routes/adminRoutes';
import AdminSidebar from '../adminSidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
        <div classNname="" >
            <AdminNav/>
            <div classNname="" >
                {<Outlet />}
            </div>
            <AdminSidebar />
        </div>
    </div>
  )
}

export default AdminLayout