import React from 'react'
import { Button } from '../ui/button'
import { AlignJustify, LogOut } from 'lucide-react'

const AdminHeader = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-transparent border-b">
      <Button className='lg:hidden sm:block'>
        <AlignJustify />
        <span className='sr-only'>Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button className='inline-flex gap-2 items-center px-4 py-2 rounded text-sm font-medium shadow bg-black text-white'>
          <LogOut/>
          Logout
        </Button>
      </div>
    </header>
  )
}

export default AdminHeader