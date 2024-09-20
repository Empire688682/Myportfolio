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
          <Link href='/' style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <FaArrowRightLong style={{ width: "50px", color: "white" }} />
          <Link href='/about' style={{ color: "white", textDecoration: "none" }}>About Me</Link>
        </div>
      </div>
      <AboutComp />
      <p className={styles.p}>
      My journey into the world of technology began in a humble setting as a plumber, where I learned the importance of precision, problem-solving, and hard work. While creating functional systems with my hands, I discovered my true passion: building dynamic and efficient web applications that deliver seamless user experiences.</p>

<p>Transitioning from plumbing to tech wasn&#39;t just a career change; it was a leap driven by curiosity and the desire to make a meaningful impact. I immersed myself in the world of coding, mastering technologies like JavaScript, ReactJS, NextJS, NodeJS, and MongoDB. Each line of code became a new tool in my toolkit, allowing me to turn ideas into reality.</p>

<p>Today, I specialize in crafting tailored solutions for businesses of all sizes—whether you&#39;re a budding startup or an established enterprise. I bring your vision to life with engaging front-end designs and powerful, scalable back-end systems. My goal is to ensure that every application not only meets your expectations but exceeds them, delivering an exceptional user experience.</p>

<p>Let&#39;s collaborate to build something remarkable that reflects your unique brand and goals. I&#39;m committed to delivering high-quality results and look forward to partnering with you on your next project.
      </p>
    </div>
  )
}

export default About;
