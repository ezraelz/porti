import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/login'
import AdminDashoard from '../pages/admin/adminDashoard'

const AdminRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='' element={<AdminDashoard/>}/>
            <Route path='login' element={<Login />}/>
        </Routes>
    </div>
  )
}

export default AdminRoutes