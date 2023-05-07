import {createContext, useEffect, useState}  from 'react'
import axios from 'axios'

const AuthContext = createContext({
  connected: false,
  profilepicture: '',
  firstname: '',
  lastname: '',
  getConnection: () => {},
});
function GlobalContext({children}) {
  const [connected,setConnected] = useState(false)
  const [profilepicture,setProfilePicture] = useState('')
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const getConnection = async()=>{
    const connection = await axios.get('http://localhost:8000/auth/verify')
    if(connection.status === 200){
      console.log('testConnection')
      setConnected(connection.data.connected)
      setFirstname(connection.data.firstname)
      setLastname(connection.data.lastname)
      setProfilePicture(connection.data.profilepicture)
    }
  }
  useEffect(()=>{
    getConnection()
    console.log(connected)
  },[])
  return (
    <AuthContext.Provider value={{getConnection,connected,profilepicture,firstname,lastname}}>
        {children}
    </AuthContext.Provider>
  )
}

export  {GlobalContext}
export default AuthContext