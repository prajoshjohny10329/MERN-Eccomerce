// import { adminSidebarItems } from '@/config/adminSidebarItems'
import { Boxes, ChartArea, LayoutDashboard } from 'lucide-react'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

// admin sidebar  
const adminSidebarItems = [
  {
      id: 'dashboard',
      label: 'Dashboard',
      path: '/admin/dashboard',
      icon: <LayoutDashboard />
  },
  {
      id: 'products',
      label: 'Products',
      path: '/admin/products',
      icon: <Boxes />
  },
  {
      id: 'orders',
      label: 'Orders',
      path: '/admin/orders',
      icon: <ChartArea />
  }
]

//function for dynamic sidebar menu items
const DynamicSidebar = () =>{
  const navigate = useNavigate();
  return (
    <nav className='mt-8 flex flex-col'>
      {
        adminSidebarItems.map(menuItem =>(
          <div key={menuItem.id} onClick={()=> navigate(menuItem.path)} className="flex cursor-pointer items-center gap-2 rounded-sm shadow-lg p-3 mt-1 hover:bg-slate-50">
            {menuItem.icon}
            <div className='text-lg font-bold'>{menuItem.label}</div>
          </div>
        ))
      }

    </nav>
  )
}

// AdminSideBar Component
const AdminSideBar = () => {
  return (
    <Fragment>
      <aside className="hidden w-64 flex-col border-r-2 bg-transparent p-6 lg:flex ">
        <h1 className='text-xl flex justify-center font-black'>Amin Panel</h1>
        <DynamicSidebar />
      </aside>
    </Fragment>
  )
}

export default AdminSideBar