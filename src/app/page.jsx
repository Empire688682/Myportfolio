"use client";
import Image from "next/image";
import styles from "./page.module.css";
import AboutComp from "@/Component/AboutComp/AboutComp";
import ServiceComp from "@/Component/ServiceComp/ServiceComp";
import HomePageBanner from "@/Component/HomePageBanner/HomePageBanner";
import PortfolioCart from "@/Component/PortfolioComp/Portfolio";
import { useState, useEffect } from "react";
import Review from "@/Component/Review/Review";
import Link from "next/link";
import { InView, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import axios from "axios";
import LoadingSpinner from "@/Component/LoadingSpinner/LoadingSpinner";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [category, setCategory] = useState("All");
  const { ref: cl1Ref, inView: cl1View } = useInView({ triggerOnce: true });
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const getData = async () => {
    try {
      setLoading(true);
      const baseURL =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      const response = await axios.get(`${baseURL}/api/data/get`);
      if (response.data.success) {
        setDatas(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div
        ref={cl1Ref}
        className={cl1View ? styles.observerCatch : styles.homeContainer}
      >
        <motion.div
          className={styles.textCon}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>THIS IS ME</h3>
          <h1>Juwon Asehinde</h1>
          <p>
            A <b>Fullstack Web Developer</b> passionate about creating dynamic and efficient
            applications. From engaging front-end designs to scalable back-end systems,
            I deliver solutions tailored to your vision.
          </p>
          <Link href="/contact" className={styles.contactBtn}>
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          className={styles.imageCon}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            className={styles.homepage_img}
            src="/fine-jayempire2.png"
            alt="Portfolio Hero"
            fill
          />
        </motion.div>
      </div>

      <div className={styles.exportCompCon}>
        <AboutComp />
        <div className={styles.serviceCompCon}>
          <ServiceComp />
        </div>
        <HomePageBanner />
        <div className={styles.portfolio}>
          <div className={styles.content}>
            <div className={styles.portfolioConHead}>
              <h1>Our Featured Projects</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
            {loading ? (
              <LoadingSpinner />
            ) : (
             <div>
               <div className={styles.portfolioCart}>
                {[...datas].reverse().slice(0,3).map((data) => {
                  return (
                      <div key={data._id}>
                        <PortfolioCart
                          setCategory={setCategory}
                          category={category}
                          data={data}
                        />
                      </div>
                    );
                })}
              </div>
              {
                datas?.length > 0 && (
                  <p className={styles.viewMoreBtn} onClick={()=>router.push("/project")}>View all</p>
                )
              }
             </div>
            )}
          </div>
        </div>
        <Review />
      </div>
    </div>
  );
};

export default HomePage;
