"use client"
import Link from 'next/link'
import styles from './Service.module.css'
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceComp from '@/Component/ServiceComp/ServiceComp';

const Service = () => {

  return (
    <div className={styles.container}>
      <div className={styles.serviceHead}>
        <h1>Services</h1>
        <div className={styles.headLinks}>
          <Link href='/' style={{color:"white", textDecoration:"none"}}>Home</Link>
          <><FaArrowRightLong style={{width:"50px", color:"white"}} /></>
          <Link href='/service' style={{color:"white", textDecoration:"none"}}>Service Me</Link>
        </div>
      </div>
      <ServiceComp/>
     </div>
  )
}

export default Service
