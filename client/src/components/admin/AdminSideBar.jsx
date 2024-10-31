import { ChartArea } from 'lucide-react'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminSideBar = () => {

  const navigate = useNavigate();
  return (
    <Fragment>
      <aside className="hidden w-64 flex-col border-r bg-transparent p-6 lg:flex">
        <div onClick={()=> navigate('/admin/dashboard')} className="flex cursor-pointer items-center gap-2">
          <ChartArea /> 
          <h1 className='text-lg font-bold'>Admin Panel</h1>
        </div>
      </aside>
    </Fragment>
  )
}

export default AdminSideBar