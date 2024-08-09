import styles from './PortfolioCart.module.css';
import Image from 'next/image';
const PortfolioCart = ({data, category}) => {
  return (
    <div className={styles.container}>
     <div className={styles.containerCart}>
      <div className={styles.imageCon}>
        <Image src={data.imageSrc} alt='' fill/>
        </div>
        <h3>{data.title}</h3>
        <p>{data.category}</p>
     </div>
    </div>
  )
}

export default PortfolioCart;
