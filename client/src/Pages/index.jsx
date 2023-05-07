import React from 'react'
import { Advantage, Description, Footer, Hero, Transition } from '../featurs/Acceuille'

function Index() {
  return (
    <div>
      <Hero/>
      <Description/>
      <Transition/>
        <Advantage/>
        <Footer/>
      </div>
    )
}

export default Index