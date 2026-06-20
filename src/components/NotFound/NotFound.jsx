import React from 'react'
import {Link} from 'react-router-dom'
import '../../index.css'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-3xl font-semibold'>404</h1>
        <p className='text-sm my-3 font-normal'>Page not found</p>
        <Link to='/'>
            <p className='text-md text-[#5968F0] font-medium'>Back to dashboard</p>
        </Link>
    </div>
  )
}

export default NotFound