import React from 'react'
import Blend from '../../../../assets/Blend2.svg'

function Transition() {
  return (
    <div className='bg-[#251B3C] h-[55vh] overflow-hidden text-center relative flex flex-col  items-center '>
       <div className="flex flex-col space-y-6 w-[70%] mt-12 ">
            <h2 className='h2 text-[#16F2F2] font-bold uppercase'> Lorem Ipsum Dolor Sit Col dolor </h2>
            <p className='font-Exo2 text-white'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odit fugiat distinctio 
                pariatur numquam cumque consectetur dolores est assumenda, omnis facilis quisquam deserunt 
                corporis molestias rerum ut ipsa reiciendis optio.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium 
            </p>
       </div>
        <img src={Blend} alt='blend' className='absolute  left-0 h-[70vh]' />
    </div>
  )
}

export default Transition