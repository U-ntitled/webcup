import React from 'react'

function Organisation() {
  return (
    <div className='bg-[#09081A] flex justify-between items-center p-10 h-screen'>
        <div className="flex flex-col justify-between items-beween space-y-10">
            <div className="">
                <h3 className='h3 text-white'>ABOUT THE ORGANISATION</h3>
            </div>
            <div className='h3 text-[#C525EA]'>
                <h3>WHO IS INTERNATIONAL INSTITUTE  OF DREAMS?</h3>
            </div>
            <div className="text-white font-Exo2">
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet 
                odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
            </div>
            <div className="">
                <button className='flex justify-center x items-center h-[6vh] w-[16vw] font-Exo2 bg-white  font-bold'></button>
            </div>
        </div>
        <div className="">
            <div className='bg-[#efefef] h-[25vh] w-[30vw]'/>
        </div>
    </div>
  )
}

export default Organisation