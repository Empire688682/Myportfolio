import styles from './ServiceComp.module.css';
import Image from 'next/image';

const ServiceComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.conHead}>
        <h1>My Offered Services</h1>
        <p>At Jay-Empire, I&#39;m dedicated to providing a comprehensive suite of services designed to elevate your online presence and drive your business forward

</p>
      </div>
      <div className={styles.serviceBox}>
          <div className={styles.servicesCon}>
            <h2 className={styles.H2AsHead}> 
              <div className={styles.img_Icon}>
                <Image src='/website.png' alt='' fill/>
              </div>
              Custom Web Development
              </h2>
            <p>I craft tailored solutions that meet your unique needs. Every website I build is a reflection of your brand, ensuring it stands out in the digital landscape.</p>
          </div>
          <div className={styles.servicesCon}>
            <h2 className={styles.H2AsHead}> 
            <div className={styles.img_Icon}>
                <Image src='/responsive_web.jpg' alt='' fill/>
              </div>
              Responsive Design
              </h2>
            <p>Engaging and user-friendly designs that adapt seamlessly across all devices, enhancing user experience.</p>
          </div>
          <div className={styles.servicesCon}>
            <h2 className={styles.H2AsHead}> 
            <div className={styles.img_Icon}>
                <Image src='/e-commerce.jpg' alt='' fill/>
              </div>
              E-commerce Solutions
              </h2>
            <p>Robust platforms that empower you to sell online effortlessly, complete with secure payment integrations.</p>
          </div>
          <div className={styles.servicesCon}>
            <h2 className={styles.H2AsHead}> 
            <div className={styles.img_Icon}>
                <Image src='/mentainance.png' alt='' fill/>
              </div>
              Maintenance & Support
              </h2>
            <p>Ongoing support to keep your website running smoothly, allowing you to focus on what you do best.</p>
          </div>
          <div className={styles.servicesCon}>
            <h2 className={styles.H2AsHead}> 
            <div className={styles.img_Icon}>
                <Image src='/maintenance_support.png' alt='' fill/>
              </div>
              Consultation Services
              </h2>
            <p>Unsure of where to start? I offer expert consultations to help you identify your needs and develop a strategic plan that aligns with your goals.</p>
          </div>
          <div className={styles.servicesCon}>
            <h2 className={styles.H2AsHead}> 
            <div className={styles.img_Icon}>
                <Image src='/search-engine-optimization.jpg' alt='' fill/>
              </div>
              SEO Optimization
              </h2>
            <p>I implement best practices to enhance your website&#39;s visibility in search engines, driving organic traffic and helping your business reach a wider audience.</p>
          </div>
      </div>
    </div>
  )
}

export default ServiceComp
