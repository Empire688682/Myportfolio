import Link from 'next/link'
import styles from './Footer.module.css'
import { FaFacebookF } from "react-icons/fa6";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMe}>
        <h1>About Me</h1>
        <p>A Fullstack Web Developer with a passion for building dynamic and efficient web applications that deliver seamless user experiences.</p>
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
            <Link href='https://www.facebook.com/juwon.asehinde.7' className={styles.iconLink}><FaFacebookF style={{width:"25px" ,height:"25px"}} /></Link>
            <Link href='https://github.com/Empire688682' className={styles.iconLink}><BsGithub style={{width:"25px" ,height:"25px"}} /></Link>
            <Link href='https://www.instagram.com/jahwonempire/' className={styles.iconLink}><BsInstagram style={{width:"25px" ,height:"25px"}} /></Link>
            <Link href='https://x.com/AsehindeJwon' className={styles.iconLink}><SlSocialTwitter style={{width:"25px" ,height:"25px"}} /></Link>
            <Link href='www.linkedin.com/in/asehinde-juwon-73b04b268' className={styles.iconLink}><CiLinkedin style={{width:"25px" ,height:"25px"}} /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
