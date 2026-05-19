import React from 'react'
import { UserContext } from '../Context/UserContext'
import { useContext } from 'react'

const Profile = () => {
    const {user} = useContext(UserContext)

  return (
    <div>
      <h2>profile: {user}</h2>
    </div>
  )
}

export default Profile
