import {  createContext,  useState, useContext } from "react";

  const UserContext = createContext()

 export const UserProvider = ({children}) => {
    const [user, setUser] = useState('Ravi')


    function userLogin(){
      if(user === ""){
      setUser("Ravi")
    }else{
      setUser("")
    }
}

return (
    
    <UserContext.Provider value={{user, userLogin}}>
        {children}
    </UserContext.Provider>
    
    
)


};
 export const useLogin = () => {
    return useContext(UserContext)
}
