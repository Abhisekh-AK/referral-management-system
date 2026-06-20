import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from './components/Login/LoginPage'
import ReferralPage from './components/Dashboard/ReferralPage'
import NotFound from './components/NotFound/NotFound'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<ReferralPage />} />
          {/* <Route path='/not-found' element={<NotFound />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
      
  
  )
}


export default App
