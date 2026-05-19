import { UserContext } from './UserContext'
import { useContext } from 'react'

import React from 'react'

const User = () => {
    let name = useContext(UserContext)
  return (
    <div>
<h1>{name}</h1>
    </div>
  )
}

export default User
