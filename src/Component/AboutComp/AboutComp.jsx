import Image from 'next/image'
import React from 'react'
import styles from './AboutCom.module.css';
import Link from 'next/link';
import { SiReactos } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";

const AboutComp = () => {
  return (
   <div className={styles.container}>
        <div className={styles.imageCon}>
        <Image className={styles.image}
        src='/about.png'
        alt=''
        fill
        />
        <div className={styles.animation}>
          <SiReactos className={styles.icon}/>
          <FaProjectDiagram className={styles.icon}/>
        </div>
        </div>
        <div className={styles.textCon}>
        <h3>ABOUT ME</h3>
        <h1>PERSONAL DETAILS</h1>
        <p>I&#39;m a Fullstack Web and Software Developer skilled in JavaScript, PHP, Node.js, and database management, with expertise in React, Next.js, and Three.js. I continuously advance my career by learning and growing. I work closely with clients to deliver efficient, scalable solutions that solve real-world problems. Let&#39;s bring your ideas to life.</p>
        {
          //<Link href='/service' className={styles.linkBtn}>VIEW FULL DETAILS</Link>
        }
        <div className={styles.more_details}>
          <div>
            <h2>PRESENT</h2>
            <h4>Freelance Web Developer</h4>
            <p>Working happily on my own projects</p>
            <p>2023 - Present</p>
          </div>
          <div>
            <h2>2023</h2>
            <h4>Web development program</h4>
            <p>Completed a web development program at DISCOVA</p>
          </div>
          <div>
            <h2>2023-2024</h2>
            <h4>Web development program at KNOWITTO</h4>
            <p>Advance my web development program at KNOWITTO</p>
          </div>
        </div>
        </div>
   </div>
  )
}

export default AboutComp
