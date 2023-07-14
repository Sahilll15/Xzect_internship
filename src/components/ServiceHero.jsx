import React from 'react'
import styles from '../styles/ServiceHero.module.css'
import Link from 'next/link'
import PageNavigation from './PageNavigation'


const serviceHero = () => {
  return (
    <div className={styles.hero}>
    
    <div className={styles.left}>
      <PageNavigation title={'service'} />

      <div className={styles.heading}>Discover the True Potential of Your Business with Our Industry-Leading Services</div>

    <div className={styles.subheading}>
    We provide specialized services that are custom-crafted to enable the expansion and growth of your business.

    </div>

    <div className={styles.button}>
    Consult with an Expert
    </div>
    
    
     </div>
    <div className={styles.img}> </div>
</div>
  )
}

export default serviceHero