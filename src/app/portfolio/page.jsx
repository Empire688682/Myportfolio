"use client"
import styles from './Portfolio.module.css'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import PortfolioCart from '@/Component/portfolioCart/PortfolioCart.jsx';
import { datas } from '@/Component/PortfolioData/PortfolioData.js';
import { useEffect, useState } from 'react';

const Portfolio = () => {

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

  const [category, setCategory] = useState("All");
  return (
    <div className={styles.container}>
    <div className={styles.portfolioHead}>
      <h1>Portfolio</h1>
      <div className={styles.headLinks}>
        <Link href='/' style={{color:"white", textDecoration:"none"}}>Home</Link>
        <><FaArrowRightLong style={{width:"50px", color:"white"}} /></>
        <Link href='/portfolio' style={{color:"white", textDecoration:"none"}}>Portfolio</Link>
      </div>
    </div>
    <div className={styles.content}>
        <div className={styles.portfolioConHead}>
            <h1>Our Latest Featured Projects</h1>
            <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className={styles.categories}>
          <p className={category === "All"? styles.active:styles.category } onClick={()=> setCategory((prev) => prev = "All")}>All</p>
          <p className={category === "Portfolio"? styles.active:styles.category  } onClick={()=> setCategory((prev) => prev === "Portfolio"?"All":"Portfolio" )}>Portfolio</p>
          <p className={category === "e-Commerce"? styles.active:styles.category  } onClick={()=> setCategory((prev) => prev === "e-Commerce"?"All":"e-Commerce" )}>e-Commerce</p>
          <p className={category === "Blog"? styles.active:styles.category  } onClick={()=> setCategory((prev) => prev === "Blog"?"All":"Blog" )}>Blog</p>
          <p className={category === "Landing Page"? styles.active:styles.category  } onClick={()=> setCategory((prev) => prev === "Landing Page"?"All":"Landing Page" )}>Landing Page</p>
          <p className={category === "Personal Website"? styles.active:styles.category  } onClick={()=> setCategory((prev) => prev === "Personal Website"?"All":"Personal Website" )}>Personal Website</p>
        </div>
        <div className={styles.portfolioCart}>
         {
          datas.map((data) =>{
           if(category === "All" || category === data.category){
            return <PortfolioCart setCategory={setCategory} category={category} key={data.id} data={data}/>
           }
          })
         }
        </div>
    </div>
   </div>
  )
}

export default Portfolio
