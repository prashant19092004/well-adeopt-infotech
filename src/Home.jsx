import React from 'react'
import Hero from './components/Home/Hero'
import AboutSection from './components/Home/AboutSection'
import DigitalExcellence from './components/Home/DigitalExcellence'
import CardSection from './components/Home/CardSection'
import Steps from './components/Home/Steps'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <DigitalExcellence />
      {/* <CardSection /> */}
      <Steps />
    </div>
  )
}

export default Home