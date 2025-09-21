"use client";
import Image from "next/image";
import styles from "./PortfolioSection.module.css";

const PortfolioSection = ({data}) => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
                  <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={data.image}
                alt={data.title}
                fill
                className={styles.image}
              />
              <div className={styles.overlay}>
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  View Project
                </a>
              </div>
            </div>
            <div className={styles.content}>
              <h3>{data.title}</h3>
              <p>{data.category}</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
