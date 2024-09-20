import Image from 'next/image'
import React from 'react'
import styles from './AboutCom.module.css'

const AboutComp = () => {
  return (
   <div className={styles.container}>
        <div className={styles.imageCon}>
        <Image className='image'
        src='/about.png'
        alt=''
        fill
        />
        </div>
        <div className={styles.textCon}>
        <h3>ABOUT ME</h3>
        <h1>PERSONAL DETAILS</h1>
        <p>I'm a skilled Fullstack Web Developer and Software Developer with experience in JavaScript, PHP, Node.js, and database management, with expertise in frameworks like React, Next.js, Three.js, and more. I'm advancing my career step by step, always eager to learn and grow. As a fast learner, I collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life.</p>
        <button>VIEW FULL DETAILS</button>
        </div>
   </div>
  )
}

export default AboutComp
