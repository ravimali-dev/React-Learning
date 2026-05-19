import React from 'react'
import { UserContext } from '../Context/UserContext'
import { useContext } from 'react'

const Navbar = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
        <h1>User:{user}</h1>
    </div>
  )
}

export default Navbar
