"use client"
import Image from 'next/image';
import styles from './Blog.module.css';
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { useState,useEffect } from 'react';

// eslint-disable-next-line @next/next/no-async-client-component
const Blog = () => {
  const [category, setCategory] = useState("All");
  const [allPosts, setAllPosts] = useState([]);
  
  return (
    <div className={styles.container}>
      <div className={styles.blogCon}>
        <div className={styles.blogBanner}>
             <div className={styles.bloBannerCont}>
             <h1>Dude Youre Getting a Telescope</h1>
              <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first</p>
              <button>View More</button>
             </div>
        </div>
      </div>
      <div className={styles.blogCategory}>
          <div className={styles.threeColum}  onClick={()=>setCategory((prev)=> prev === "Social"? "All":"Social")}>
            <div className={styles.imageCon}>
              <Image src='/tech-tutoral.jpg' alt='' fill/>
            </div>
            <div className={styles.overlay}>
              <h2>Tech Tutorials & Guides</h2>
              <hr />
              <p>Step-by-step coding solutions and best practices.</p>
            </div>
          </div>
          <div className={styles.threeColum} onClick={()=>setCategory((prev)=> prev === "Politics"? "All":"Politics")}>
            <div className={styles.imageCon} >
              <Image src='/tech-experience.jpg' alt='' fill/>
            </div>
            <div className={styles.overlay}>
              <h2>Developer Tools & Resources</h2>
              <hr />
              <p>Boost your productivity with the right tools.</p>
            </div>
          </div>
          <div className={styles.threeColum}onClick={()=>setCategory((prev)=> prev === "Food"? "All":"Food")}>
            <div className={styles.imageCon}>
              <Image src='/tech-journey.jpg' alt='' fill/>
            </div>
            <div className={styles.overlay}>
              <h2>Web Development Journey & Experiences</h2>
              <hr />
              <p>Insights from my personal path into tech.</p>
            </div>
          </div>
        </div>
        <div className={styles.AllPosts}>
          <div className={styles.leftColum}>
           
            <div className={styles.nextBackContainer}>
            <IoIosArrowBack className={styles.nextBackContainerIcon} />
            <div className={styles.nextBackNumber}>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
            </div>
            <MdNavigateNext className={styles.nextBackContainerIcon} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Blog
