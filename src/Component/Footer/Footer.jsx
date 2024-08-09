import Link from 'next/link'
import styles from './Footer.module.css'
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMe}>
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente in voluptate labore quos molestiae nihil recusandae architecto quam reprehenderit, et blanditiis. Eligendi enim esse quis fuga error <Link href='/'>JayEmpire</Link> reprehenderit soluta.</p>
      </div>
      <div className={styles.newsletter}>
        <h1>Newsletter</h1>
        <div className={styles.formCon}>
        <p>Stay updated with our latest trends</p>
            <form>
                <input type="text" name="" id="" placeholder='Enter Email Address' />
                <button type="submit">Send</button>
            </form>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <p>Let us be social</p>
        <div className={styles.links}>
            <Link href='/contact' className={styles.iconLink}><FaFacebookF style={{width:"25px" ,height:"25px"}} /></Link>
            <Link href='/contact' className={styles.iconLink}><BsInstagram style={{width:"25px" ,height:"25px"}} /></Link>
            <Link href='/contact' className={styles.iconLink}><SlSocialTwitter style={{width:"25px" ,height:"25px"}} /></Link>
            <Link href='/contact' className={styles.iconLink}><CiLinkedin style={{width:"25px" ,height:"25px"}} /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
