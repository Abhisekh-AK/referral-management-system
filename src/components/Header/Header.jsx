import {Link, useNavigate} from 'react-router-dom'
import '../../index.css'
import Cookies from 'js-cookie'

import React from 'react'



const Header = () => {
    const navigate = useNavigate()

    const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
    }

    return ( 
        <nav className='bg-white shadow-md py-4 px-4 md:px-0 md:mx-10'>
            <ul className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center px-8'>
                <li>
                <Link
                    to='/'
                    className='text-[#5968F0] text-2xl font-bold'
                >
                    Go Business
                </Link>
                </li>

                <div className='flex flex-col gap-2 w-full md:w-auto md:flex-row'>
                <button className='bg-[#5968F0] text-white font-bold border-[#5968F0] border rounded-3xl p-2 md:w-36'>
                    Try for free
                </button>

                <button
                    onClick={onClickLogout}
                    className='bg-transparent text-red-700 font-bold border-red-300 border rounded-xl p-2 md:w-24 hover:bg-red-400'
                >
                    Log out
                </button>
                </div>
            </ul>
        </nav>
    )
}

export default Header