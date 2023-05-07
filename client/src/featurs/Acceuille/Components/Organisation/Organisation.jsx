import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slide1 from './../../../../assets/slide1.jpg'
import slide2 from './../../../../assets/slide2.png'
import slide3 from './../../../../assets/slide3.jpeg'



function Organisation() {
    const slide = (
        <AwesomeSlider className='w-[60%] h-[75vh]' >
            <div className='h-full w-[50vw] text-[#040404] rounded-lg '><img src={slide1} className='min-w-full min-h-full' alt="" /></div>
            <div className='h-full w-[50vw] text-[#040404] rounded-lg '><img src={slide2} className='min-w-full min-h-full' alt="" /></div>
            <div className='h-full w-[50vw] text-[#040404] rounded-lg '><img src={slide3} className='min-w-full min-h-full' alt="" /></div>
        </AwesomeSlider>
    )
  return (
    <div className='bg-[#09081A] flex justify-between items-start pt-16 p-14 h-screen '>
        <div className="flex flex-col org-cont w-[50%] space-y-8 ">
            <div className="space-y-5">
                <div className="">
                    <h3 className='h3 org-title text-white'>ABOUT THE ORGANISATION</h3>
                </div>
                <div className='h3 org-title text-[#C525EA]'>
                    <h3>WHO IS INTERNATIONAL INSTITUTE  OF DREAMS?</h3>
                </div>
            </div>
            <div className="text-white org-cont-p font-Exo2">
                <p className='org-p'>The International Institute of dreams is a multidisciplinary organization dedicated 
                to the pure and applied investigation of dreams, dreaming and nightmares.
                </p>
                <p className='org-p'>
                    We've developped Onirix to help people to know what their dreams tell them about them and their future, 
                    love story and many useful informations.
                </p>
            </div>
            
            <div className="font-Exo2 font-normal pt-14">
                <button className='flex justify-center rounded-sm org-btn text-[1.6rem] items-center h-[6vh] w-[16vw] font-Exo2 bg-white  font-bold'>More about us</button>
            </div>
        </div>
        <div className="h-[75vh] w-[30vw] rounded-lg ">
            {slide}
        </div>
    </div>
  )
}

export default Organisation