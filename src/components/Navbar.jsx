import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className="logo">Logo</div>
      <div className={`${styles.navbaritems} ${isOpen ? 'open' : ''}`}>
       {
        isOpen &&(
          <div c>
     
          <a className={styles.link} href="#">Popular</a>
          <a className={styles.link} href="#">Services</a>
          <a className={styles.link} href="#">Industries</a>
          <a className={styles.link} href="#">Resources</a>

          </div>
        )
       }
          
        
      </div>
      <div className="dropdown-icon" onClick={handleToggle}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
