"use client"
import Image from 'next/image';
import styles from './page.module.css';
import AboutComp from '@/Component/AboutComp/AboutComp';
import ServiceComp from '@/Component/ServiceComp/ServiceComp';
import HomePageBanner from '@/Component/HomePageBanner/HomePageBanner';
import PortfolioCart from '@/Component/PortfolioComp/Portfolio';
import { datas } from '@/Component/PortfolioData/PortfolioData';
import { useState } from 'react';
import Review from '@/Component/Review/Review';
import Link from 'next/link';
import { InView, useInView } from 'react-intersection-observer';

const HomePage = () => {
  const [category, setCategory] = useState("All");
  const {ref:cl1Ref, inView:cl1View} = useInView({triggerOnce:true});

  return (
    <div>
      <div ref={cl1Ref}className={cl1View? styles.observerCatch : styles.homeContainer}>
        <div className={styles.textCon}>
          <h3>THIS IS ME</h3>
          <h1>Juwon Asehinde</h1>
          <p>A <b>Fullstack Web Developer</b> with a passion for building dynamic and efficient web applications that deliver seamless user experiences
          Whether you&#39;re a small business or an enterprise, I offer tailored solutions to bring your vision to life—from engaging front-end designs to powerful, scalable back-end systems.</p>
          <Link href='/contact' className={styles.contactBtn}>Contact Me</Link>
        </div>
        <div className={styles.imageCon}>
          <Image className={styles.homepage_img}
            src='/about.png'
            alt=''
            fill
          />
        </div>
      </div>
      <div className={styles.exportCompCon}>
        <AboutComp/>
        <div className={styles.serviceCompCon}>
        <ServiceComp/>
        </div>
        <HomePageBanner/>
        <div className={styles.portfolio}>
          <div className={styles.content}>
            <div className={styles.portfolioConHead}>
              <h1>Our All Featured Projects</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className={styles.categories}>
              <p className={category === "All" ? styles.active : styles.category} onClick={() => setCategory("All")}>All</p>
              <p className={category === "Portfolio" ? styles.active : styles.category} onClick={() => setCategory(category === "Portfolio" ? "All" : "Portfolio")}>Portfolio</p>
              <p className={category === "e-Commerce" ? styles.active : styles.category} onClick={() => setCategory(category === "e-Commerce" ? "All" : "e-Commerce")}>e-Commerce</p>
              <p className={category === "Blog" ? styles.active : styles.category} onClick={() => setCategory(category === "Blog" ? "All" : "Blog")}>Blog</p>
              <p className={category === "Landing Page" ? styles.active : styles.category} onClick={() => setCategory(category === "Landing Page" ? "All" : "Landing Page")}>Landing Page</p>
              <p className={category === "Personal Website" ? styles.active : styles.category} onClick={() => setCategory(category === "Personal Website" ? "All" : "Personal Website")}>Personal Website</p>
            </div>
            <div className={styles.portfolioCart}>
              {
                datas.map((data) => {
                  if (data.subCategory === "AllLatest") {
                    if (category === data.category || category === "All") {
                      return <PortfolioCart setCategory={setCategory} category={category} key={data.id} data={data} />;
                    }
                  }
                  return null;
                })
              }
            </div>
          </div>
        </div>
        <Review/>
      </div>
    </div>
  );
};

export default HomePage;
