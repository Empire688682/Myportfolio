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
        My journey into the world of technology began in a humble setting as a plumber, where I learned the importance of precision, problem-solving, and the value of hard work. While working with my hands to create functional systems, I discovered my true passion: building dynamic and efficient web applications that deliver seamless user experiences.

        Transitioning from plumbing to tech wasn’t just a career change; it was a leap fueled by curiosity and the desire to make a meaningful impact. I immersed myself in the world of coding, mastering technologies like JavaScript, ReactJS, NextJS, NodeJS, and MongoDB. Each line of code became a new tool in my toolkit, allowing me to transform ideas into reality.

        Today, I specialize in crafting tailored solutions for businesses of all sizes—whether you're a budding startup or an established enterprise. I bring your vision to life with engaging front-end designs and powerful, scalable back-end systems. My goal is to ensure that every application not only meets your expectations but also exceeds them, creating a delightful experience for your users.

        Let’s work together to build something exceptional that reflects your unique brand and goals. I’m committed to delivering high-quality results and am excited to partner with you on your next project.
      </p>
    </div>
  )
}

export default About;
