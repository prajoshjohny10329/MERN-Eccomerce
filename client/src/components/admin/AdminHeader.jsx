import React from 'react'
import { Button } from '../ui/button'
import { AlignJustify, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useToast } from "@/hooks/use-toast";
import { logoutAuthThunk } from '@/store/auth-slice'

const AdminHeader = () => {
  const dispatch = useDispatch();
  const {toast} = useToast();

  const adminLogout = (event) =>{
    event.preventDefault()
    dispatch(logoutAuthThunk()).then((data)=>{
      const {message, success} = data.payload;
      success ?
        (toast({
          title: "Success",
          description: message,
          className: 'bg-black text-green-500'
        }))
      :
        (toast({
          variant: "destructive",
          title: "Warning",
          description: message,
          className: "bg-black text-red-500",
        }))
       
      
    })
    
  }
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-transparent border-b shadow-md">
      <Button className='lg:hidden sm:block'>
        <AlignJustify />
        <span className='sr-only'>Toggle Menu</span>
      </Button>
      <div  className="flex flex-1 justify-end">
        <Button onClick={adminLogout} className='inline-flex gap-2 items-center px-4 py-2 rounded text-sm font-medium shadow bg-black text-white'>
          <LogOut/>
          Logout
        </Button>
      </div>
    </header>
  )
}

export default AdminHeader