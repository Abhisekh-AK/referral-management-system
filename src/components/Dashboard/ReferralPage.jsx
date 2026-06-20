import React from 'react'
import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header/Header'
import OverviewSection from './OverviewSection'
import Footer from '../Footer/Footer'

const ReferralPage = () => {
  const token = Cookies.get('jwt_token')
  if(token === undefined) {
    return <Navigate to='/login' />
  }

  return (
    <>
      <Header />

      <OverviewSection />

      <Footer />
    </>
    
  )
}

export default ReferralPage