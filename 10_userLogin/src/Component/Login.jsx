import React from 'react'
import { useLogin } from '../Context/UserContext';


const Login = () => {
   const { user, userLogin } = useLogin()
  return (
    <div>
      <button onClick={userLogin}>

            {user ? "Logout" : "Login"}

        </button>
    </div>
  )
}

export default Login
