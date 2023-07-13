import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.navbar}> {/* Use the CSS class name */}
    <ul>
      <li>
        <Link href="/">Xzent</Link>
      </li>
    
    </ul>
  </nav>
  )
}

export default Navbar