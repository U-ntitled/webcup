import React from 'react'
import Featurs from '../../../../Components/Featurs'
import NavBar from '../../../../Components/NavBar'
import Title from '../../../../Components/Title'
import Blend from '../../../../assets/Blend.svg'

function Hero() {
  return (
    <div className=' relative hero h-screen'>
      <NavBar/>
      <Title/>
      <Featurs/>
      <img src={Blend} alt='blend' className='blend absolute bottom-[-26vh] right-0' />
    </div>
  )
}

export default Hero
