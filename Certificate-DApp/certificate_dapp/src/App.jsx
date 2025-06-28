import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IssueCertificate from './componemts/issueCertificate'
import VerifyCertificate from './componemts/getCertificate'
import Home from './componemts/Home'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/issueCertificate'element={<IssueCertificate/>}/>
        <Route path='/getcertificate'element={<VerifyCertificate/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
