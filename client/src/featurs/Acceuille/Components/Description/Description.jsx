import React from 'react'
import Ia from '../../../../assets/Girl.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {motion,easeInOut} from 'framer-motion'

function Description() {
  return (
    <div className='bg-[#09081a] h-screen main-desc w-full py-36'>
      <div className="flex justify-between px-[8vw] desc">
        <div className="w-[45%]  desc-ch">
            <motion.div 
            initial={{x: -200 ,opacity:0}}
            transition={{duration: 1 ,easeInOut,delay:0.2}}
            whileInView={{x:0,opacity:1}}
            viewport={{once: true}}
            className="flex flex-col space-y-2 cont-p-h2">
                <h2 className='h2 text-white desc-h2'>What is Onirix? </h2>
                <div className="flex items-center space-x-2">
                    <div className="bg-[#16F2F2] flex items-end mt-2 desc-cont-p h-[2px] w-5"/>
                    <p className='font-Exo2 text-white  desc-p text-lg'>The AI of the future</p>
                </div>
            </motion.div>
            <motion.div 
            initial={{x: -200 ,opacity:0}}
            transition={{duration: 1 ,easeInOut,delay: 0.5}}
            whileInView={{x:0,opacity:1}}
            viewport={{once: true}}
            className="pl-5">
                <p className='font-Exo2 text-white desc-p'>
                  Onirix is a dreamery AI created by the International Institute of Dreams made to help us unraveling our dreams and even our nightmares.. 
                  It will make an useful prediction about our future, love story, based on our dreams. 
                  Furthermore, Onirix will advise us about our current situation, on what should we do, such as consulting a psychologist for professional advices.
                </p>
            </motion.div>
            <motion.div 
            initial={{x: -200 ,opacity:0}}
            transition={{duration: 1 ,easeInOut,delay:1}}
            whileInView={{x:0,opacity:1}}
            viewport={{once: true}}
            className="pl-5">
                <button className='flex desc-btn justify-center items-center h-[6vh] w-[16vw] font-Exo2 bg-[#C525EA] text-white font-bold'>
                    VISIT <ArrowForwardIcon sx={{marginLeft:'5px', fontSize:'20px', fontWeight:"bold"}}/>
                </button>
            </motion.div>
        </div>
        <div className="w-[45%]">
            <motion.img 
            initial={{x: 200 ,opacity:0}}
            transition={{duration: 1 ,easeInOut}}
            whileInView={{x:0,opacity:1}}
            viewport={{once: true}}
            src={Ia} alt='AI' className='w-[64vh] desc-img'/>
        </div>
      </div>
    </div>
  )
}

export default Description
