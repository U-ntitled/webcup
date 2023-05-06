import React from 'react'
import {motion} from 'framer-motion'

function Featurs() {
  return (
    <div className='absolute flex  bottom-[-10vh] left-[20%]'>
      <div className=" flex justify-between w-[60vw]">
        <div className="featur border-[#C525EA]  border-b-[1px] shadow-md shadow-[#C525EA]">
            <h3 className='featur-title font-Exo2'>
                FEATURE ONE
            </h3>
            <p className='text-white  p-feat text-center font-Exo2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati similique quas ea deleniti 
                voluptas commodi? Necessitatibus
            </p>
        </div>
        <div className="featur  border-[#16F2F2] border-b-[1px]">
            <h3 className='featur-title font-Exo2'>
                FEATURE ONE
            </h3>
            <p className='text-white p-feat text-center font-Exo2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati similique quas ea deleniti 
                voluptas commodi? Necessitatibus
            </p>
        </div>
        <div className="featur border-[#C525EA] border-b-[1px]">
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
