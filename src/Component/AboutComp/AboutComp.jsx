import Image from 'next/image'
import React from 'react'
import styles from './AboutCom.module.css';
import Link from 'next/link';
import { SiReactos } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";

const AboutComp = () => {
  return (
   <div className={styles.container}>
        <div className={styles.imageCon}>
        <Image className={styles.image}
        src='/favicon.ico'
        alt=''
        fill
        />
        <div className={styles.animation}>
          <SiReactos className={styles.icon}/>
          <FaProjectDiagram className={styles.icon}/>
        </div>
        <div className={styles.socialMedia}>
        <h4>Let us be social</h4>
        <div className={styles.links}>
            <Link href='www.linkedin.com/in/asehinde-juwon-73b04b268' className={styles.iconLink}><CiLinkedin style={{width:"25px" ,height:"25px"}} /></Link>
            <Link href='https://github.com/Empire688682' className={styles.iconLink}><BsGithub style={{width:"25px" ,height:"25px"}} /></Link>
            <Link href='https://www.facebook.com/juwon.asehinde.7' className={styles.iconLink}><FaFacebookF style={{width:"25px" ,height:"25px"}} /></Link>
            <Link href='https://www.instagram.com/jahwonempire/' className={styles.iconLink}><BsInstagram style={{width:"25px" ,height:"25px"}} /></Link>
            <Link href='https://x.com/AsehindeJwon' className={styles.iconLink}><SlSocialTwitter style={{width:"25px" ,height:"25px"}} /></Link>
        </div>
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
          <div>
            <h2>Future plans</h2>
            <h4>Senior Web Developer</h4>
            <p>plans of becoming a senior web developer working for both organisations and individuals</p>
          </div>
        </div>
        </div>
   </div>
  )
}

export default AboutComp
