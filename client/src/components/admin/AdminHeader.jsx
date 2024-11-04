import React from 'react'
import { Button } from '../ui/button'
import { AlignJustify, LogOut } from 'lucide-react'
import LogoutButton from '../common/logoutButton'



const AdminHeader = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-transparent border-b shadow-md">
      <Button className='lg:hidden sm:block'>
        <AlignJustify />
        <span className='sr-only'>Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <LogoutButton />
      </div>
    </header>
  )
}

export default AdminHeader