import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CryptoHome from './Pages/CryptoHome'
import CryptoDetail from './Pages/CryptoDetail'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<CryptoHome/>}></Route>
      <Route path='/coin/:id' element={<CryptoDetail />}></Route>
    </Routes>
    </BrowserRouter>  
    
  )
}

export default App
