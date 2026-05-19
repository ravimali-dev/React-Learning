import React from 'react'
import { UserContext } from './Context/UserContext'
import Navbar from './Component/Navbar'
import Profile from './Component/Profile'
import Login from './Component/Login'
import { useState } from 'react'

const App = () => {

 
  
  const [user, setUser] = useState('')


    function userLogin(){
      if(user === ""){
      setUser("Ravi")
    }else{
      setUser("")
    }
    }

  return (
    <UserContext.Provider value={{user,userLogin}}>
      <Navbar/>
      <Profile/>
      <Login/>
    </UserContext.Provider>
  )
}

export default App
