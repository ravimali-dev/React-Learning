
import { UserContext } from './UserContext'
import { useContext } from 'react'

const Navbar = () => {

    let name = useContext(UserContext)
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Navbar
