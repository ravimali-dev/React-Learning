import React from 'react'
import { UserContext } from './UserContext'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import User from './User'
const App = () => {
  return (
    <div>
      <UserContext.Provider value='Ravi'>
        <Navbar/>
        <Sidebar/>
        <User/>
      </UserContext.Provider>
    </div>
  )
}

export default App
