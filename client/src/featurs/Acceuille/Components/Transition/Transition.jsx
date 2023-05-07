import React from 'react'
import Blend from '../../../../assets/Blend2.svg' 
import {motion,easeInOut} from 'framer-motion'

function Transition() {
  return (
    <div className='bg-[#251B3C] h-[55vh] overflow-hidden text-center relative flex flex-col  items-center '>
       <motion.div 
        initial={{x: 200 ,opacity:0}}
        transition={{duration: 1 ,easeInOut,delay: 0.5}}
        whileInView={{x:0,opacity:1}}
        viewport={{once: true}}className="flex flex-col space-y-6 w-[70%] mt-12 ">
            <h2 className='h2 text-[#16F2F2] font-Exo2 trans-title font-bold uppercase'> THE RISE OF ARTIFICIAL INTELLIGENCE </h2>
            <p className='font-Exo2 text-white trans-p z-10'>
              Nowadays, artificial intelligences are making a huge revolution to into our society. 
              They have an overwhelming and very useful capacity almost in every domains... 
              There are plenty of AI assistants that have been developped at the moment.
            </p>
       </motion.div>
        <img src={Blend} alt='blend' className='absolute  left-0 h-[70vh]' />
    </div>
  )
}

export default Transition