"use client"
import styles from './Contact.module.css'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link'
import { GoHome } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const Contact = () => {

  return (
    <div className={styles.container}>
    <div className={styles.contactHead}>
      <h1>Contact</h1>
      <div className={styles.headLinks}>
        <Link id='Link' href='/' style={{color:"white", textDecoration:"none"}}>Home</Link>
        <><FaArrowRightLong  style={{width:"50px", color:"white"}} /></>
        <Link id='Link' href='/contact' style={{color:"white", textDecoration:"none"}}>Contact</Link>
      </div>
    </div>
    <div className={styles.map}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.057579481107!2d3.365421073345873!3d6.639772193354738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93906824f703%3A0x8cba4fcd8c840cd!2sOjodu%20Berger!5e0!3m2!1sen!2sng!4v1712595163454!5m2!1sen!2sng" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className={styles.contact}>
          <div className={styles.contactLeft}>
            <div className={styles.contactLeftCon}>
            <GoHome  className={styles.icons} />
            <div>
              <h2>Ikorodu Lagos, Nigeria</h2>
              <p>13 Koshebinu Street IbsheTitun</p>
            </div>
            </div>
            <div className={styles.contactLeftCon}>
            <BsTelephone className={styles.icons} />
            <div>
              <h2><a href="tel:+234 9154 3581 35">+234 9154 3581 39</a></h2>
              <p>Mon to Sat 8am to 10pm</p>
            </div>
            </div>
            <div className={styles.contactLeftCon}>
            <CiMail className={styles.icons} />
            <div>
              <h2><a href="mailto:asehindej@gmail.com">asehindej@gmail.com</a></h2>
              <p>Send us your query anytime!</p>
            </div>
            </div>
          </div>
          <div className={styles.contactRight}>
            <form action="">
             <div className={styles.inputs}>
                <input type="text" name="" id="name" placeholder='Enter your name' required/>
                <input type="mail" name="" id="email" placeholder='Enter email address' required/>
                <input type="text" name="" id="name" placeholder='Enter subject' required/>
             </div>
              <div className={styles.textera}>
              <textarea name="text" id="text" cols="30" rows="7" placeholder='Enter message' required></textarea>
              <button type="submit">Send</button>
              </div>
            </form>
          </div>
    </div>
   </div>
  )
}

export default Contact
