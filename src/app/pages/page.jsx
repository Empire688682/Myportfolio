"use client"
import styles from './Pages.module.css'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link'
import { useEffect } from 'react';

const Pages = () => {
  useEffect(() => {
    // Check if window is defined to ensure code runs only on client side
    if (typeof window !== 'undefined') {
      // Dynamically import ScrollReveal
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default ? ScrollReveal.default() : ScrollReveal();
        console.log(sr); // Debugging line to check ScrollReveal import
        sr.reveal('img, h1, h2, h3, p, a, button, input', {
          delay: 250,
          distance: '50px',
          duration: 1000,
          easing: 'ease-in-out',
          origin: 'bottom',
        });
      }).catch(err => {
        console.error("Failed to load ScrollReveal", err);
      });
    }
  }, []);

  return (
    <div className={styles.container}>
    <div className={styles.pagesHead}>
      <h1>Pages</h1>
      <div className={styles.headLinks}>
        <Link href='/' style={{color:"white", textDecoration:"none"}}>Home</Link>
        <><FaArrowRightLong style={{width:"50px", color:"white"}} /></>
        <Link href='/pages' style={{color:"white", textDecoration:"none"}}>Pages</Link>
      </div>
    </div>
   </div>
  )
}

export default Pages
