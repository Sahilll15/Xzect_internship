import React from 'react'
import styles from  '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.heading}>Build, test, and execute your ideas with our innovative solutions.
        
        <div className={styles.buttons}>
        <div className={styles.btn}>Chat now on whatsaap</div>
        <div className={styles.btn}>Explore Our Services</div>
        </div>
        
         </div>
        <div className={styles.img}> </div>
    </div>
  )
}

export default Hero