// import { adminSidebarItems } from '@/config/adminSidebarItems'
import { Boxes, ChartArea, LayoutDashboard } from 'lucide-react'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

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

const DynamicSidebar = () =>{
  const navigate = useNavigate();
  return (
    <nav className='mt-8 flex flex-col'>
      {
        adminSidebarItems.map(menuItem =>(
          <div key={menuItem.id} onClick={()=> navigate(menuItem.path)} className="flex cursor-pointer items-center gap-2 py-3">
            {menuItem.icon}
            {
              console.log(menuItem.icon)
              
            }
            <div className='text-lg font-bold'>{menuItem.label}</div>
          </div>
        ))
      }
      {/* <div onClick={()=> navigate('/admin/dashboard')} className="flex cursor-pointer items-center gap-2 py-3">
          <ChartArea /> 
          <h1 className='text-lg font-bold'>Admin Panel</h1>
        </div> */}

    </nav>
  )
}

const AdminSideBar = () => {
  return (
    <Fragment>
      <aside className="hidden w-64 flex-col border-r bg-transparent p-6 lg:flex">
        <DynamicSidebar />

        {/* Navigate to Admin Panel  */}
        {/* <div onClick={()=> navigate('/admin/dashboard')} className="flex cursor-pointer items-center gap-2 py-3">
          <ChartArea /> 
          <h1 className='text-lg font-bold'>Admin Panel</h1>
        </div> */}

        {/* Navigate to products  */}
        {/* <div onClick={()=> navigate('/admin/products')} className="flex cursor-pointer items-center gap-2 py-3">
        <Boxes /> 
          <h1 className='text-lg font-bold'>Our Products</h1>
        </div> */}
      </aside>
    </Fragment>
  )
}

export default AdminSideBar