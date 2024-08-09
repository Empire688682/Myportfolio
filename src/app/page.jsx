"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import AboutComp from '@/Component/AboutComp/AboutComp';
import ServiceComp from '@/Component/ServiceComp/ServiceComp';
import HomePageBanner from '@/Component/HomePageBanner/HomePageBanner';
import PortfolioCart from '@/Component/portfolioCart/PortfolioCart';
import { datas } from '@/Component/PortfolioData/PortfolioData';
import { useState } from 'react';

const HomePage = () => {
  const [category, setCategory] = useState("All");

  useEffect(() => {
    // Check if window is defined to ensure code runs only on client side
    if (typeof window !== 'undefined') {
      // Dynamically import ScrollReveal
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default ? ScrollReveal.default() : ScrollReveal();
        console.log(sr); // Debugging line to check ScrollReveal import
        sr.reveal('img, h1, h2, h3, p, a, button, input', {
          delay: 250,
          distance: '50px',
          duration: 1000,
          easing: 'ease-in-out',
          origin: 'bottom',
        });
      }).catch(err => {
        console.error("Failed to load ScrollReveal", err);
      });
    }
  }, []);

  return (
    <div>
      <div className={styles.homeContainer}>
        <div className={styles.textCon}>
          <h3>THIS IS ME</h3>
          <h1>Juwon Asehinde</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque unde, at corporis aspernatur nihil maxime, nesciunt laboriosam nam veritatis minus earum quo eaque eum saepe vel adipisci! Consequuntur, impedit fugit?</p>
          <button>DISCOVER NOW</button>
        </div>
        <div className={styles.imageCon}>
          <Image
            src='/about.png'
            alt=''
            fill
          />
        </div>
      </div>
      <div className={styles.exportCompCon}>
        <AboutComp/>
        <ServiceComp/>
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
      </div>
    </div>
  );
};

export default HomePage;
