import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSideBar from './AdminSideBar'
import AdminHeader from './AdminHeader'

const AdminLayout = () => {
  return (
    <div className='flex min-h-screen w-full'>
        {/* admin sidebar  */}
        <AdminSideBar />
        <div className="flex flex-1 flex-col">
            {/* admin header  */}
            <AdminHeader />
            <main className='flex-1 bg-muted/40 p-4 md:p-6'>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default AdminLayout