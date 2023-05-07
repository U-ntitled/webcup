import React from 'react'
import Logo from '../assets/logo.svg'
import {motion} from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate() 
  return (
    <div className=" fixed flex justify-between items-center h-[13vh] w-full px-10 z-10">
        <motion.div 
        initial={
            {
                x: -200,
                opacity:0,
            }
        }
        animate={{
            x:0,
            opacity:1,
        }}
        transition={{
            duration: 1,
            delay:0.2
        }}
        className="w-[45%] flex right-navbar items-center ">
            <img src={Logo} alt='logo'/>
            <h3 className='h3 text-white'> Logo</h3>
        </motion.div>
        < motion.div 
            initial={
                {
                    x: 200,
                    opacity:0,
                }
            }
            animate={{
                x:0,
                opacity:1,
            }}
            transition={{
                duration: 1,
                delay:0.6
            }}
        className="w-[30%] flex justify-between center-navbar  ">
            <h3 className='h3 text-white'> Home </h3>
            <h3 className='h3 text-white'> Home </h3>
            <h3 className='h3 text-white'> Home </h3>
            <h3 className='h3 text-white'> Home </h3>
        </motion.div>
        <motion.div 
        initial={
            {
                x: 200,
                opacity:0,
            }
        }
        animate={{
            x:0,
            opacity:1,
        }}
        transition={{
            duration: 1,
            delay:0.6
        }}
        className="w-[25%] text-end left-navbar">
            <h3  onClick={()=>{navigate('/auth/signup')}} className='h3 text-white cursor-pointer'> Try it out </h3>
        </motion.div>
        <motion.div 
        initial={
            {
                x: 200,
                opacity:0,
            }
        }
        animate={{
            x:0,
            opacity:1,
        }}
        transition={{
            duration: 1,
            delay:0.6
        }}
        className='text-white left-navbar2 hidden'>
            <MenuIcon/>
        </motion.div>
    </div>
  )
}

export default NavBar
