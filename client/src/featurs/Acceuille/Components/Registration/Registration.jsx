import React from 'react'
import Vector from './../../../../assets/Blend 5.svg'
import {motion,easeInOut} from 'framer-motion'

function Registration() {
  return (
    <div className='h-[85vh] flex flex-col items-center overflow-hidden relative space-y-5 pt-[14vh] bg-[#25183C]'>
        <h2 className = 'h3 text-[2.5rem] font-Exo2 text-[white] text-center font-bold rg-center'>REGISTER FOR <span className = "text-[#16F2F2]" > FREE </span> AND GET TO KNOW  <br />WHAT YOUR <span className = "text-[#16F2F2]" > DREAMS </span> MEANS</h2>
        <h4 className='text-[1rem] w-[60%] font-Exo2 font-bold text-white text-center '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quia corporis veritatis magnam magni rerum maiores et odio harum repudiandae. <br/>
          lorem ipsum dolor sit amet consectetur adipscing elit
        </h4>
        <div className="">
          <motion.button
            initial={{x: -200 ,opacity:0}}
            transition={{duration: 1 ,easeInOut,delay: 0.5}}
            whileInView={{x:0,opacity:1}}
            viewport={{once: true}} className='rg-btn text-[1.6rem] font-[600] text-white bg-[#c525EA] w-[30vw] rounded-sm  h-[6vh]'>
            TRY IT FOR FREE
          </motion.button>
        </div>
        <img src={Vector} alt='vector' className='absolute  right-0 h-[69vh]' />

    </div>
  )
}

export default Registration