import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from './components/Login/LoginPage'
import ReferralPage from './components/Dashboard/ReferralPage'
import NotFound from './components/NotFound/NotFound'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/' element={<ProtectedRoute><ReferralPage /></ProtectedRoute>} />
          {/* <Route path='/not-found' element={<NotFound />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
      
  
  )
}


export default App
