import styles from './PortfolioComp.module.css';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const PortfolioCart = ({data, category}) => {
  const {ref:cl1Ref, inView:cl1View} = useInView({triggerOnce:true});
  return (
    <div className={styles.container}>
     <div ref={cl1Ref} className={`${cl1View? styles.observerCatch:styles.containerCart}`}>
      <div className={styles.imageCon}>
        <Image src={data.imageSrc} alt='' fill/>
        </div>
        <h3>{data.title}</h3>
        <p>{data.category}</p>
        <a href={data.link}>Visit {data.title}</a>
     </div>
    </div>
  )
}

export default PortfolioCart


