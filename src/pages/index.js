import Navbar from '@/components/Navbar'
import React from 'react'
import Hero from '../components/Hero'
import Solutions from '../components/Solutions'
import Tech from '@/components/Tech'
import Consultation from '@/components/Consultation'

const index = () => {
  return (
    <div className='Home' >
      <Navbar />
      <Hero />
      <Solutions />
      <Tech />
      <Consultation />
    </div>

  )
}

export default index