import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 



function Organisation() {
    const slide = (
        <AwesomeSlider className='w-full h-[screen]' >
            <div className='bg-[rgb(214,162,18)] h-full w-[30vw] text-[#040404] rounded-lg'>1</div>
            <div className='bg-[#efefef] h-full w-[30vw] text-[#040404] rounded-lg'>2</div>
            <div className='bg-red-500 h-full w-[30vw] text-[#040404] rounded-lg'>3</div>
        </AwesomeSlider>
    )
  return (
    <div className='bg-[#09081A] flex justify-between items-center p-10 h-screen '>
        <div className="flex flex-col w-[50%] space-y-7 ">
            <div className="">
                <h3 className='h3 text-white'>ABOUT THE ORGANISATION</h3>
            </div>
            <div className='h3 text-[#C525EA]'>
                <h3>WHO IS INTERNATIONAL INSTITUTE  OF DREAMS?</h3>
            </div>
            <div className="text-white font-Exo2 flex flex-col space-y-3">
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet 
                odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
            </div>
            <div className="font-Exo2 font-normal">
                <button className='flex justify-center x items-center h-[6vh] w-[16vw] font-Exo2 bg-white  font-bold'>More about us</button>
            </div>
        </div>
        <div className="h-[75vh] w-[30vw] rounded-lg ">
            {slide}
        </div>
    </div>
  )
}

export default Organisation