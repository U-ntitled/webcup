import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slide1 from './../../../../assets/slide1.jpg'
import slide2 from './../../../../assets/slide2.png'
import slide3 from './../../../../assets/slide3.jpeg'



function Organisation() {
    const slide = (
        <AwesomeSlider className='w-[60%] h-[67vh]' >
            <div className='h-full w-[50vw] text-[#040404] rounded-lg '><img src={slide1} className='min-w-full min-h-full' alt="" /></div>
            <div className='h-full w-[50vw] text-[#040404] rounded-lg '><img src={slide2} className='min-w-full min-h-full' alt="" /></div>
            <div className='h-full w-[50vw] text-[#040404] rounded-lg '><img src={slide3} className='min-w-full min-h-full' alt="" /></div>
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
            <div className="text-white font-Exo2">
                <p>The International Institute of dreams is a multidisciplinary organization dedicated 
                to the pure and applied investigation of dreams, dreaming and nightmares.
                </p>
                <p>
                    We've developped Onirix to help people to know what their dreams tell them about them and their future, 
                    love story and many useful informations.
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