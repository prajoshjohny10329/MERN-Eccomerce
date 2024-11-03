import React from 'react'
import { Outlet } from 'react-router-dom'
import LandingHeader from './LandingHeader'

const LandingLayout = ({message}) => {
  console.log(message);
  
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
      {/* Header  */}
      <LandingHeader />
      <main className='flex flex-col w-full'>
        <Outlet />

      </main>
    </div>
  )
}

export default LandingLayout