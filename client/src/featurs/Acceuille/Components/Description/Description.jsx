import React from 'react'
import Ia from '../../../../assets/Girl.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {motion,easeInOut} from 'framer-motion'

function Description() {
  return (
    <div className='bg-[#09081a] h-screen w-full py-36'>
      <div className="flex justify-between px-[8vw] desc">
        <div className="w-[45%] space-y-16">
            <motion.div 
            initial={{x: -200 ,opacity:0}}
            transition={{duration: 1 ,easeInOut,delay:0.2}}
            whileInView={{x:0,opacity:1}}
            viewport={{once: true}}
            className="flex flex-col space-y-2">
                <h2 className='h2 text-white'> Lorem  Ipsum dolor Title  </h2>
                <div className="flex items-center space-x-2">
                    <div className="bg-[#16F2F2] flex items-end mt-2  h-[2px] w-5"/>
                    <p className='font-Exo2 text-white text-lg'>Petit Descriptive</p>
                </div>
            </motion.div>
            <motion.div 
            initial={{x: -200 ,opacity:0}}
            transition={{duration: 1 ,easeInOut,delay: 0.5}}
            whileInView={{x:0,opacity:1}}
            viewport={{once: true}}
            className="pl-5">
                <p className='font-Exo2 text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero laborum cumque incidunt adipisci pariatur, voluptatum autem 
                    possimus, excepturi neque nam hic. Accusantium nostrum sed voluptatem magni, reiciendis eaque sint natus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde 
                </p>
            </motion.div>
            <motion.div 
            initial={{x: -200 ,opacity:0}}
            transition={{duration: 1 ,easeInOut,delay:1}}
            whileInView={{x:0,opacity:1}}
            viewport={{once: true}}
            className="pl-5">
                <button className='flex justify-center items-center h-[6vh] w-[16vw] font-Exo2 bg-[#C525EA] text-white font-bold'>
                    TRY IT FO FREE <ArrowForwardIcon sx={{marginLeft:'3px'}}/>
                </button>
            </motion.div>
        </div>
        <div className="w-[45%]">
            <motion.img 
            initial={{x: 200 ,opacity:0}}
            transition={{duration: 1 ,easeInOut}}
            whileInView={{x:0,opacity:1}}
            viewport={{once: true}}
            src={Ia} alt='AI' className='w-[64vh]'/>
        </div>
      </div>
    </div>
  )
}

export default Description
