import React from 'react'
import Works from './components/Works'
import Join from './components/join'
import QueAns from './components/QueAns'
import HeroSection from './components/HeroSection'
import { poppins } from './fonts'
import Header from './components/Header'
import Footer from './components/Footer'

const page = () => {

  return (
    <div className={poppins.className}>

      <HeroSection />

      <Works />
      {/* <Tagline /> */}
      <Join />
      <QueAns />
    </div>
  )
}

export default page
