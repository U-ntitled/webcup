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
        className="featur border-[#C525EA]  border-b-[1px] shadow-sm shadow-[#C525EA]">
            <h3 className='featur-title font-Exo2'>
                UNRAVEL
            </h3>
            <p className='text-white  p-feat text-center font-Exo2'>
                Wanna Uncover the deepest secret of your dream?
                Explore the Dreamland with the help of our AI assistant.
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
        }}className="featur  border-[#16F2F2] border-b-[1px] shadow-sm shadow-[#16F2F2]">
            <h3 className='featur-title font-Exo2'>
                PREDICT
            </h3>
            <p className='text-white p-feat text-center font-Exo2'>
                What your dreams are telling you about your future? 
                Well, Onirix will make a prediction for you basing on your dream.
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
        className="featur border-[#C525EA] border-b-[1px] shadow-sm shadow-[#C525EA]">
            <h3 className='featur-title font-Exo2'>
                ADVISE
            </h3>
            <p className='text-white p-feat text-center font-Exo2 '>
                Any advices concerning your dream and your future?
                We also offer you this possibility so that you can have a better future
            </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Featurs
