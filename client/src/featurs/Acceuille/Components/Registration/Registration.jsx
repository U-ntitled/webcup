import React from 'react'
import Vector from './../../../../assets/Blend 5.svg'

function Registration() {
  return (
    <div className='h-[85vh] flex flex-col items-center overflow-hidden relative space-y-7 pt-[14vh] bg-[#25183C]'>

        <h2 className = 'h3 text-[3.5rem] font-Exo2 text-[white] text-center font-bold rg-center mb-[10vh]'>REGISTER FOR <span className = "text-[#16F2F2]" > FREE </span> AND GET TO KNOW  <br />WHAT YOUR <span className = "text-[#16F2F2]" > DREAMS </span> MEANS</h2>
        <h4 className='text-[1.6rem] w-[80%] font-Exo2 font-bold text-white text-center'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quia corporis veritatis magnam magni rerum maiores et odio harum repudiandae. <br/>
          lorem ipsum dolor sit amet consectetur adipscing elit
        </h4>
        <div className="">
          <button className='rg-btn text-[1.6rem] font-[600] text-white bg-[#c525EA] w-[30vw] rounded-sm  h-[6vh]'>
            TRY IT FOR FREE
          </button>
        </div>
        <img src={Vector} alt='vector' className='absolute  right-0 h-[69vh]' />

    </div>
  )
}

export default Registration