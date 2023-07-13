import Navbar from '@/components/Navbar'
import React from 'react'

import Home from './Home'


const index = () => {
  return (
    <div className='Home' >
      <Navbar />
      <Home />
    </div>

  )
}

export default index