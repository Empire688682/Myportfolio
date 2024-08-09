"use client";
import { useEffect } from 'react';
import AboutComp from '@/Component/AboutComp/AboutComp';
import styles from './About.module.css';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  useEffect(() => {
    // Check if window is defined to ensure code runs only on client side
    if (typeof window !== 'undefined') {
      // Dynamically import ScrollReveal
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default ? ScrollReveal.default() : ScrollReveal();
        console.log(sr); // Debugging line to check ScrollReveal import
        sr.reveal('Img, h1, h2, h3, p, a, button, input', {
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
      <div className={styles.aboutHead}>
        <h1>About Me</h1>
        <div className={styles.headLinks}>
          <Link href='/' style={{color:"white", textDecoration:"none"}}>Home</Link>
          <FaArrowRightLong style={{width:"50px", color:"white"}} />
          <Link href='/about' style={{color:"white", textDecoration:"none"}}>About Me</Link>
        </div>
      </div>
      <AboutComp/>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod vitae animi, nesciunt vero ratione totam est corporis, magnam fugiat minus? Mollitia aspernatur inventore itaque fuga! Sapiente atque voluptates fuga.
        Ipsam consequuntur incidunt, ullam dolorem facere reiciendis aperiam quasi cupiditate modi magni voluptatibus voluptates rem quibusdam officiis illum nostrum quod eum repudiandae nihil consequatur iste dolor! Odio veniam accusamus laborum.
        Asperiores delectus nulla quod tempore distinctio ab quam alias, harum ipsa? Quis blanditiis numquam consequuntur tenetur quo pariatur hic, tempora ea rerum praesentium, labore cum. Minima corporis libero delectus eligendi.
      </p>
    </div>
  )
}

export default About;
