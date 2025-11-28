import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import NavBar from './NavBar.jsx'
import Dashboard from './Dashboard.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'

export default function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoutes>
            <Dashboard/>
          </ProtectedRoutes>
          }/>
      </Routes>
    </div>
  )
}
