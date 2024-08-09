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
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque unde, at corporis aspernatur nihil maxime, nesciunt laboriosam nam veritatis minus earum quo eaque eum saepe vel adipisci! Consequuntur, impedit fugit?</p>
        <button>VIEW FULL DETAILS</button>
        </div>
   </div>
  )
}

export default AboutComp
