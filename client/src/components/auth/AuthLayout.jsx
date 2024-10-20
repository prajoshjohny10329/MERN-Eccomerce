import React from 'react'
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
            <h1 className="text-4xl font-extrabold tracking-tighter text-white">Welcome to MERN ECommerce </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-white">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout