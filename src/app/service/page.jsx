"use client"
import Link from 'next/link'
import styles from './Service.module.css'
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceComp from '@/Component/ServiceComp/ServiceComp';
import { useEffect } from 'react';

const Service = () => {
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
      <div className={styles.serviceHead}>
        <h1>Services</h1>
        <div className={styles.headLinks}>
          <Link href='/' style={{color:"white", textDecoration:"none"}}>Home</Link>
          <><FaArrowRightLong style={{width:"50px", color:"white"}} /></>
          <Link href='/service' style={{color:"white", textDecoration:"none"}}>service Me</Link>
        </div>
      </div>
      <ServiceComp/>
     </div>
  )
}

export default Service
