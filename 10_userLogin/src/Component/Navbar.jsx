import { useLogin } from "../Context/UserContext"


const Navbar = () => {

   const { user } = useLogin()

   return (
      <h1>{user ? user : "Guest"}</h1>
   )
}

export default Navbar