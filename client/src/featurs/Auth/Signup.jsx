import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import axios from 'axios';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AuthContext from '../../context/GlobalContext';

function Signup() {
    const {getConnection} = useContext(AuthContext)
    const navigate = useNavigate()
    const HandleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value  
        setInformation(info=> ({...info,[name]:value}))
    }
    const [error,setError] = useState({fname:false,lname:false,email:false,password:false,confirmpassword:false})
    const [information,setInformation] = useState({fname:'',lname:'',email:'',password:'',confirmpassword:''})
    const HandleClickCreate = async()=>{
        if(!information.lname){
          setError(err=>({...err,lname:true}))
        }
        if(!information.fname){
          setError(err=>({...err,fname:true}))
        }
        if(!information.password){
          setError(err=>({...err,password:true}))
        }
        if(!information.confirmpassword){
          setError(err=>({...err,confirmpassword:true}))
        }
        if(!information.email){
          setError(err=>({...err,email:true}))
        }
        console.log(information)
        if(information.lname && information.email   && information.confirmpassword 
          && information.password && information.fname){
          const userinformation = {
            lname: information.lname,
            fname: information.fname,
            password: information.password,
            email: information.email,
            confirm: information.confirmpassword
           }
           console.log(userinformation)
           const register = await axios.post('http://localhost:8000/auth/register',userinformation)
           if(register.status === 200){
            getConnection()
             navigate('/auth/confirmation')
           }
        }
      }
  return (
    <div className='flex justify-center items-center h-screen w-[100%] bg-[#09081A]'>
        <div className="w-[100%] md:w-[70%] flex flex-col space-y-4 md:space-y-6 ">
                <div className=" w-[80%] flex justify-center items-center mx-auto ">
                    <img className='w-[6em]' src={Logo} alt='logo'/>
                    <h2 className='h2 text-white'> Logo</h2>
                </div>
                <div className="w-[100%] flex justify-center items-center mx-auto">
                    <div className="w-[70%] md:w-[50%] flex flex-col space-y-4 md:space-y-0 md:flex-row justify-around items-center  ">
                        <div className="flex flex-col  w-[100%] items-center space-y-1 ">
                            {
                                error.lname && (
                                  <div className="flex justify-between items-center text-red-500 text-sm">
                                    <span className='font-Exo2 '>This is required !!</span>
                                    <InfoOutlinedIcon sx={{height:'3vh'}}/>
                                </div>
                                )                  
                            }
                            <input onChange={HandleChange} type='text' name='fname' 
                            id='fname' className='border border-none w-[100%]  md:w-[60%] 
                            text-sm text-[#7B7777] bg-[#F2F2F2] pl-4 md:pl-2
                              h-[6vh] rounded-full focus:outline-none bg-none' 
                              placeholder='Your first name'
                              />
                        </div>
                        <div className="flex flex-col  w-[100%] items-center space-y-1 ">
                            {
                                error.fname && (
                                        <div className="flex justify-between items-center text-red-500 text-sm">
                                        <span className='font-Exo2 '>This is required !!</span>
                                        <InfoOutlinedIcon sx={{height:'3vh'}}/>
                                         </div>
                                )                  
                            }
                            <input onChange={HandleChange} type='text' name='lname' 
                            id='lname' className='border border-none w-[100%]  md:w-[60%] 
                              text-sm text-[#7B7777] bg-[#F2F2F2] pl-4 md:pl-2
                              h-[6vh] rounded-full focus:outline-none bg-none' 
                              placeholder='Your last name...'
                              />
                        </div>
                    </div>
                </div>
                <div className="flex w-[100%] flex-col  justify-center items-center">
                    <div className="w-[70%] md:w-[80%] flex justify-center items-center flex-col space-y-1">
                    {
                        error.email && (
                            <div className="flex justify-start items-start w-[50%]">
                                <div className="flex justify-between items-center text-red-500 text-sm">
                                    <span className='font-Exo2 '>This is required !!</span>
                                    <InfoOutlinedIcon sx={{height:'3vh'}}/>
                                </div>
                            </div>
                        )                  
                    }
                        <input onChange={HandleChange} type='text' name='email' 
                        id='email' className='border border-none w-[100%] font-Exo2  md:w-[50%] 
                        text-sm text-[#7B7777] bg-[#F2F2F2] pl-4
                          h-[6vh] rounded-full focus:outline-none bg-none' 
                          placeholder='Enter your email...'
                          />
                    </div>
                </div>
                <div className="flex w-[100%] flex-col  justify-center items-center">
                    <div className="w-[70%] md:w-[80%] flex justify-center items-center flex-col space-y-1 ">
                            {
                                error.password && (
                                <div className="flex justify-start items-start w-[50%]">
                                  <div className="flex justify-between items-center text-red-500 text-sm">
                                    <span className=' font-Exo2'>This is required !!</span>
                                    <InfoOutlinedIcon sx={{height:'3vh'}}/>
                                  </div>
                                </div>
                                )                  
                            }
                        <input onChange={HandleChange}  type='password' name='password' 
                        id='password' className='border border-none font-Exo2 w-[100%]  md:w-[50%] 
                        text-sm text-[#7B7777] bg-[#F2F2F2] pl-4
                          h-[6vh] rounded-full focus:outline-none bg-none' 
                          placeholder='Enter your password...'
                          />
                    </div>
                </div>
                <div className="flex w-[100%] flex-col  justify-start items-center">
                    <div className="w-[70%] md:w-[80%] flex justify-center items-center flex-col space-y-1 ">
                        {
                            error.confirmpassword && (
                            <div className="flex justify-start items-start w-[50%]">
                              <div className="flex justify-between items-center text-red-500 text-sm">
                                <span className='font-Exo2 '>This is required !!</span>
                                <InfoOutlinedIcon sx={{height:'3vh'}}/>
                              </div>
                            </div>
                            )                  
                        }
                        <input onChange={HandleChange} type='password' name='confirmpassword' 
                        id='confirmpassword' className='border border-none w-[100%]  md:w-[50%] 
                        text-sm text-[#7B7777] bg-[#F2F2F2] pl-4
                          h-[6vh] rounded-full focus:outline-none bg-none' 
                          placeholder='Confirme your password...'
                          />
                    </div>
                </div>
                <div className="flex justify-between items-center w-[100%] mx-auto pt-2">
                    <div className="w-[70%] md:w-[40%] flex justify-center items-center mx-auto">
                        <button onClick={HandleClickCreate}  className="bg-[#C525EA] w-[100%] h-[6vh] flex justify-center items-center rounded-full text-[#f2f2f2] text-xl" >S' enregistrer</button>
                    </div>
                </div>
                <div className="flex justify-between items-center w-[100%] mx-auto ">
                    <div className="flex justify-between  w-[70%] md:w-[40%] mx-auto">
                            <div className="text-[#f2f2f2]">
                                <h2 className='font-Exo2'>Already have an account ?</h2>
                            </div>
                            <div className="text-[#00B8FF] underline font-Exo2">
                                <Link to='/auth/login'>Login</Link>
                            </div>
                     </div>
                </div>
        </div>
    </div>
  )
}

export default Signup

