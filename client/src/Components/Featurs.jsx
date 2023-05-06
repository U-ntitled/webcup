import React from 'react'
import {motion} from 'framer-motion'

function Featurs() {
  return (
    <div className='absolute flex  bottom-[-10vh] left-[20%]'>
      <div className=" flex justify-between w-[60vw]">
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
            delay:1.5
        }}
        className="featur border-[#C525EA]  border-b-[1px] shadow-md shadow-[#C525EA]">
            <h3 className='featur-title font-Exo2'>
                FEATURE ONE
            </h3>
            <p className='text-white  p-feat text-center font-Exo2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati similique quas ea deleniti 
                voluptas commodi? Necessitatibus
            </p>
        </motion.div>
        <motion.div 
        initial={
            {
                y: 200,
                opacity:0,
            }
        }
        animate={{
            y:0,
            opacity:1,
        }}
        transition={{
            duration: 1,
            delay:1.5
        }}className="featur  border-[#16F2F2] border-b-[1px]">
            <h3 className='featur-title font-Exo2'>
                FEATURE ONE
            </h3>
            <p className='text-white p-feat text-center font-Exo2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati similique quas ea deleniti 
                voluptas commodi? Necessitatibus
            </p>
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
            delay:1.5
        }}
        className="featur border-[#C525EA] border-b-[1px]">
            <h3 className='featur-title font-Exo2'>
                FEATURE ONE
            </h3>
            <p className='text-white p-feat text-center font-Exo2 '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati similique quas ea deleniti 
                voluptas commodi? Necessitatibus
            </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Featurs
