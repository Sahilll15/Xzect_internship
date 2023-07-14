import Hero from '@/components/Hero'
import React from 'react'
import ServicesCard from '@/components/Solutions'
import Tech from '@/components/Tech'
import Consultation from '@/components/Consultation'
import Footer from '@/components/Footer'
import ServiceHero from '@/components/ServiceHero'
import Navbar from '@/components/Navbar'


const index = () => {
    return (
        <div>
            <Navbar />
            <ServiceHero />
            <ServicesCard />
            <Tech />
            <Consultation />
            <Footer />
        </div>
    )
}

export default index