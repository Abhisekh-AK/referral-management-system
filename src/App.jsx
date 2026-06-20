import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './components/Login/LoginPage'
import ReferralPage from './components/Dashboard/ReferralPage'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<ReferralPage />} />
        </Routes>
      </BrowserRouter>
    </>
      
  
  )
}


export default App
