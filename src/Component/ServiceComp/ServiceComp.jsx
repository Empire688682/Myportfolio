import styles from './ServiceComp.module.css';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { serviceData } from '../ServiceData/ServiceData';

const ServiceComp = () => {

  return (
    <div className={styles.container}>
      <div className={styles.conHead}>
        <h1>My Offered Services</h1>
        <p>
          At Jay-Empire, I&#39;m dedicated to providing a comprehensive suite of services designed to elevate your online presence and drive your business forward.
        </p>
      </div>
      <div className={styles.serviceBox}>
        {serviceData.map((data, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 }); // Unique ref for each service
          return (
            <div
              ref={ref}
              key={index}
              className={inView ? styles.observerCatch : styles.servicesCon} // Apply styles based on inView state
            >
              <div className={styles.H2AsHead}>
                <div className={styles.img_Icon}>
                  <Image src={data.image} alt={data.title} fill />
                </div>
                <h2>{data.title}</h2>
              </div>
              <p>{data.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceComp;
