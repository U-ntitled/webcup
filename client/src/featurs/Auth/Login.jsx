import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios';

const Login = () => {
    // const {getConnection} = useContext(AuthContext)
    // const [visibility,setVisibility] = useState(false)
    const [errorpassword,setErrorPassword] = useState(false)
    const [erroremail,setErrorEmail] = useState(false)
    const navigate = useNavigate()
    const [information,setInformation] = useState({
      email:'',
      password:''
    })
    const HandleClickLogin = async()=>{
        if(!information.email){
          setErrorEmail(true)
         }
        if(!information.password){
         setErrorPassword(true)
       }
      if(information.password && information.email){
        const login = await axios.post('http://localhost:8000/auth/login',information)
        if(login.status === 200){
           //getConnection()
           navigate('/users/') 
        }
     }
     }
     const HandleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setInformation(values => ({...values,[name]:value}))
    }
  return (
    <div className='flex justify-center items-center h-[100vh] w-[100%] bg-[#09081A]'>
      <div className="flex flex-col space-y-5 ">
        <div className="flex justify-center items-center w-[100%]">
          <img className='w-[6em]' src={Logo} alt='logo'/>
          <h2 className='h2 text-white'> Logo</h2>
        </div>
        <div className="text-center ">
           <p className='text-[#868686] text-base font-Exo2'>
              Veuillez indiquer ci-dessous votre mot de passe :
           </p>
        </div>
        <div className="w-[85%]  flex justify-center flex-col space-y-3  mx-auto ">
            {
                erroremail && (
                <div className="flex justify-start items-start w-[50%]">
                  <div className="flex justify-between items-center text-red-500 text-sm">
                    <span className=' font-Exo2'>This is required !!</span>
                    <InfoOutlinedIcon sx={{height:'3vh'}}/>
                  </div>
                </div>
                )
            }
          <input type='email' name='email' onFocus={()=>setErrorEmail(false)} onChange={HandleChange}
           id='email' className='border border-none  w-[100%] 
            text-start pl-5 text-base text-[#7B7777] bg-[#F2F2F2]
             h-[6vh] rounded-full focus:outline-none bg-none' 
             placeholder='Entrer votre addresse email...'
             />
        </div>
        <div className="w-[85%]  flex justify-center flex-col space-y-3  mx-auto ">
            {
                errorpassword && (
                <div className="flex justify-start items-start w-[50%]">
                  <div className="flex justify-between items-center text-red-500 text-sm">
                    <span className='font-Exo2 '>This is required !!</span>
                    <InfoOutlinedIcon sx={{height:'3vh'}}/>
                  </div>
                </div>
                )
              }
            <input type='password' name='password'  onFocus={()=>setErrorPassword(false)} onChange={HandleChange}
             id='password'  className='border pl-5 border-none  w-[100%] 
               text-base text-start text-[#7B7777] bg-[#F2F2F2]
               h-[6vh] rounded-full focus:outline-none bg-none' 
               placeholder='Entrer votre mot de passe...'
               />
        </div>
        <div className="flex justify-between items-center w-[85%] mx-auto">
          <div className=" flex justify-between items-center">
            <input type="checkbox"  className='h-5 border border-none outline-none ' name="remember" id="remember" />
            <label htmlFor="remember" className='text-[#f2f2f2] ml-2 font-Exo2'> Forgive me </label>
          </div>
          <div className="">
              <h6 className='text-[#16F2F2]'> Forgot password ?</h6>
          </div>
        </div>
        <div className="flex justify-between items-center w-[85%] mx-auto">
          <button onClick={HandleClickLogin}  className="bg-[#C525EA] w-[100%] h-[6vh] flex justify-center items-center rounded-full text-[#f2f2f2] text-xl" >Se connecter</button>
        </div>
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <div className="text-[#f2f2f2] font-Exo2">
                <h3>Don't have an account ?</h3>
            </div>
            <div className="text-[#16F2F2] underline font-Exo2">
                <Link to='/auth/signup' >Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login