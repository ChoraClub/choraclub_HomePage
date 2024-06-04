import React from 'react'
import Works from './components/Works'
import Join from './components/join'
import QueAns from './components/QueAns'
import HeroSection from './components/HeroSection'
import { poppins } from './fonts'
import Header from './components/Header'

const page = () => {
  return (
    <div className={poppins.className}>
      <Header />
      <HeroSection />

      <Works />
      <Join />
      <QueAns />
    </div>
  )
}

export default page
