import React from 'react'
import { UserContext } from '../Context/UserContext'
import { useContext } from 'react'

const Login = () => {
    let {user, userLogin} = useContext(UserContext)

  return (
    <div>
      <button onClick={userLogin}>

            {user ? "Logout" : "Login"}

        </button>
    </div>
  )
}

export default Login
