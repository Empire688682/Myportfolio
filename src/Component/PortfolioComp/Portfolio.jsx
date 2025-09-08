import styles from "./PortfolioComp.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const PortfolioCart = ({ data }) => {
  const { ref: cl1Ref, inView: cl1View } = useInView({ triggerOnce: true });
  return (
    <div className={styles.container}>
      <div
        ref={cl1Ref}
        className={`${cl1View ? styles.observerCatch : styles.containerCart}`}
      >
        <div className={styles.imageCon}>
          <Image src={data.image} className={styles.image} alt={data.title} fill />
        </div>
        <div className={styles.text}>
          <h3>{data.title}</h3>
          <p>{data.category}</p>
          <p className={styles.linkP}>
            Visit: <a href={data.link}>{data.title}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCart;
