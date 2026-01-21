import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
const AdminDashoard = lazy(() => import('../pages/admin/adminDashoard'))
const Analytics = lazy(()=> import('../pages/admin/analytics'))

const AdminRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='' element={<AdminDashoard/>}/>
            <Route path='analytics' element={<Analytics />}/>
        </Routes>
    </div>
  )
}

export default AdminRoutes