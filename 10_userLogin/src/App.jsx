import React from 'react'
import Navbar from './Component/Navbar'
import Profile from './Component/Profile'
import Login from './Component/Login'
import { UserProvider } from './Context/UserContext'

const App = () => {

 
  
  

  return (
    <UserProvider>
      <Navbar/>
      <Profile/>
      <Login/>
      </UserProvider>
    
  )
}

export default App
