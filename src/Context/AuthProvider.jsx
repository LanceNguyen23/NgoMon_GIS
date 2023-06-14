import { createContext, useEffect, useState } from "react"
import { getAuth } from "firebase/auth"

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export default function AuthProvider({children}) {
  const [user, setUser] = useState({})

  const auth = getAuth();

  useEffect(() =>{
    console.log('Auth provider')
    const unsubcribed = auth.onIdTokenChanged((user)=>{
      console.log('auth user', user);
      if(user?.uid) {
        setUser(user)
        localStorage.setItem('accessToken', user.accessToken);
        return;
      }

      // reset user info
      setUser({});
      localStorage.clear()
    })

    return () => {
      unsubcribed();
    }

  }, [auth])

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}
