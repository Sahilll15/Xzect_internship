import Hero from '@/components/Hero'
import React from 'react'
import ServicesCard from '@/components/Solutions'
import Tech from '@/components/Tech'
import Consultation from '@/components/Consultation'
import Footer from '@/components/Footer'



const index = () => {
    return (
        <div>

            <ServicesCard />
            <Tech />
            <Consultation />
            <Footer />
        </div>
    )
}

export default index