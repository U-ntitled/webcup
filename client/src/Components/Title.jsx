import React from 'react'
import {motion} from 'framer-motion'

function Title() {
  return (
    <div className=' flex justify-center items-center h-screen'>
      <div className="w-[90%] flex justify-center items-center flex-col text-white space-y-5">
        <motion.h1 
        initial={
            {
                scale: 0.5,
                opacity:0,
            }
        }
        animate={{
            scale: 1,
            opacity:1,
        }}
        transition={{
            duration: 1.5
        }}
        className='h1 font-extrabold'>
            Unveiling the Secrets of Your Dreams 
        </motion.h1>
        <motion.div 
        initial={
            {
                scale: 0.5,
                opacity:0,
            }
        }
        animate={{
            scale: 1,
            opacity:1,
        }}
        transition={{
            duration: 1.5
        }}
        className="text-center  font-Exo2 w-[60%]">
            <p className='font-Exo2'>
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </p>
        </motion.div>
        <div className=" flex justify-between w-[30%] pt-[12px] ">
            <button className='bg-[#C525EA] btn'>
                TRY FOR  FREE
            </button>
            <button className='bg-[#fff] text-[#040404] btn'>
                DISCOVER
            </button>
        </div>
      </div>
    </div>
  )
}

export default Title
