import React from 'react'
import Hero from '../components/Hero'
import Solutions from '../components/Solutions'
import Tech from '@/components/Tech'
import Consultation from '@/components/Consultation'
import Footer from '@/components/Footer'
const Home = () => {
  return (
    <>
    <Hero />
      <Solutions />
      <Tech />
      <Consultation />
      <Footer />
    </>
  )
}

export default Home