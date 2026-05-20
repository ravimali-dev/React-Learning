import React from 'react'

import { useLogin } from '../Context/UserContext'

const Profile = () => {
     const { user } = useLogin()

  return (
    <div>
      <h2>{user ? user : "Guest"}</h2>
    </div>
  )
}

export default Profile
