import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import '../../index.css'

const LoginPage = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [showSubmitError, setShowSubmitError] = useState(false)
    const navigate = useNavigate()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitSuccess = (jwtToken) => {
        Cookies.set('jwt_token', jwtToken, {
            expires: 30,
            path: '/'
        })
        navigate('/')
    }

    const onSubmitFailure = (errorMsg) => {
        setErrorMsg(errorMsg)
        setShowSubmitError(true)
    }


    const submitForm = async (event) => {
        event.preventDefault()

        const userDetails = {email, password}

        const url = 'https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin'
        const options = {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            body: JSON.stringify(userDetails),
        }

        try {
            const response = await fetch(url, options)
            const data = await response.json()
            if (response.ok) {
                // Handle successful login
                //console.log('Login successful', data)
                onSubmitSuccess(data.data.token);
            } else {
                // Handle login error
                //console.error('Login failed', data.message)
                onSubmitFailure(data.message)
            }
        } catch (error) {
            // Handle network error
            console.error('Network error', error)
        }
    }
    
    const renderEmailField = () => (
        <>
            <label className='font-medium' htmlFor="email">Email</label>
            <input 
                type="email"
                id="email"
                className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={email}
                onChange={onChangeEmail}
             />
        </>
    )

    const renderPasswordField = () => (
        <>
            <label className='font-medium' htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={password}
                onChange={onChangePassword}
             />
        </>
    )

  return (
    <div className='bg-blue-100 min-h-screen flex flex-col justify-center items-center'>
        <div className='bg-white w-100 p-8 rounded-xl shadow-lg'>
            <h1 className='text-4xl font-bold font-sans text-[#5968F0] mb-3'>Go Business</h1>
            <p className='text-gray-500 font-normal'>Sign in to open your referral dashboard</p>
            <form className='mt-6' onSubmit={submitForm}>
                <div className='flex flex-col mb-4'>
                    {renderEmailField()}
                </div>
                
                <div className='flex flex-col mb-4'>
                    {renderPasswordField()}
                </div>
                <button type='submit' className='bg-[#5968F0] text-white font-bold w-full py-2 px-4 rounded hover:bg-blue-600'>
                    Sign in
                </button>

                {showSubmitError && <p className='text-red-500 text-sm mt-2'>{errorMsg}</p>}

            </form>
        </div>
    </div>
  )
}

export default LoginPage