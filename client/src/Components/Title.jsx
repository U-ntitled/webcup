import React from 'react'
import {motion} from 'framer-motion'

function Title() {
  return (
    <div className=' flex justify-center items-center h-screen tit'>
      <div className="w-[90%] cont flex justify-center items-center flex-col text-white space-y-5">
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
            duration: 1,
            delay:1
        }}
        className='w-[100%] text-center h1 font-extrabold'>
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
            duration: 1,
            delay:1
        }}
        className="text-center  font-Exo2 w-[60%]">
            <p className='font-Exo2 p-title'>
                What if dreams were more than just illusions of the mind? What if they were able to predict the future?
                An amazing discovery mady be researchers from the International Institute of Dreams, a renowned organisation specializing in dream studies.
                "Onirix"
            </p>
        </motion.div>
        <div className=" flex justify-between w-[30%] pt-[12px] ">
            <motion.button
            initial={
                {
                    x: -200,
                    opacity:0,
                }
            }
            animate={{
                x: 0,
                opacity:1,
            }}
            transition={{
                duration: 1,
                delay:1.5
            }}
            className='bg-[#C525EA] btn rounded-sm'>
                TRY FOR  FREE
            </motion.button>
            <motion.button
            initial={
                {
                    x: 200,
                    opacity:0,
                }
            }
            animate={{
                x: 0,
                opacity:1,
            }}
            transition={{
                duration: 1,
                delay:1.5
            }}
            className='bg-[#fff] text-[#040404] btn rounded-sm'>
                DISCOVER
            </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Title
