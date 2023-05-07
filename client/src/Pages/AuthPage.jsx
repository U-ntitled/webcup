import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../featurs/Auth/Login'
import Signup from '../featurs/Auth/Signup'


function AuthPage() {
  return (
    <div>
        <Routes >
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            {/* <Route path='/confirmation' element={<Confirmation/>}/> */}
        </Routes>
    </div>
  )
}

export default AuthPage