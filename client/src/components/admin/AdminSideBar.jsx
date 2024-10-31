import { Boxes, ChartArea } from 'lucide-react'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminSideBar = () => {

  const navigate = useNavigate();
  return (
    <Fragment>
      <aside className="hidden w-64 flex-col border-r bg-transparent p-6 lg:flex">

        {/* Navigate to Admin Panel  */}
        <div onClick={()=> navigate('/admin/dashboard')} className="flex cursor-pointer items-center gap-2 py-3">
          <ChartArea /> 
          <h1 className='text-lg font-bold'>Admin Panel</h1>
        </div>

        {/* Navigate to products  */}
        <div onClick={()=> navigate('/admin/products')} className="flex cursor-pointer items-center gap-2 py-3">
        <Boxes /> 
          <h1 className='text-lg font-bold'>Our Products</h1>
        </div>
      </aside>
    </Fragment>
  )
}

export default AdminSideBar