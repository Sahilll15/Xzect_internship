import React from 'react'
import styles from  '../styles/Hero.module.css'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.heading}>Build, test, and execute your ideas with our innovative solutions.
        
        <div className={styles.buttons}>
        <div className={styles.btn}>Chat now on whatsaap</div>

        <Link href={'/service'} className={styles.btn}>Explore Our Services</Link>
        </div>
        
         </div>
        <div className={styles.img}> </div>
    </div>
  )
}

export default Hero