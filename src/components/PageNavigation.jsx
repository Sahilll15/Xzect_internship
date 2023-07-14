import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/PageNavigation.module.css';

const PageNavigation = ({ title, service }) => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navlink} href="/">Home</Link> /{' '}
      <Link className={styles.navlink} href={title}>{title}</Link>
      {service && (
        <>
          {' '}
          / <Link className={styles.navlink} href={service}>{service}</Link>
        </>
      )}
    </nav>
  );
};

export default PageNavigation;
