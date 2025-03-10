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
import axios from "axios";
import LoadingSpinner from "@/Component/LoadingSpinner/LoadingSpinner";

const HomePage = () => {
  const [category, setCategory] = useState("All");
  const { ref: cl1Ref, inView: cl1View } = useInView({ triggerOnce: true });
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

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
        <div className={styles.textCon}>
          <h3>THIS IS ME</h3>
          <h1>Juwon Asehinde</h1>
          <p>
            A <b>Fullstack Web Developer</b> with a passion for building dynamic
            and efficient web applications that deliver seamless user
            experiences Whether you&#39;re a small business or an enterprise, I
            offer tailored solutions to bring your vision to life—from engaging
            front-end designs to powerful, scalable back-end systems.
          </p>
          <Link href="/contact" className={styles.contactBtn}>
            Contact Me
          </Link>
        </div>
        <div className={styles.imageCon}>
          <Image className={styles.homepage_img} src="/coding.jpg" alt="" fill />
        </div>
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
              <h1>Our All Featured Projects</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className={styles.categories}>
              <p
                className={category === "All" ? styles.active : styles.category}
                onClick={() => setCategory("All")}
              >
                All
              </p>
              <p
                className={
                  category === "Portfolio" ? styles.active : styles.category
                }
                onClick={() =>
                  setCategory(category === "Portfolio" ? "All" : "Portfolio")
                }
              >
                Portfolio
              </p>
              <p
                className={
                  category === "e-Commerce" ? styles.active : styles.category
                }
                onClick={() =>
                  setCategory(category === "e-Commerce" ? "All" : "e-Commerce")
                }
              >
                e-Commerce
              </p>
              <p
                className={
                  category === "Social media" ? styles.active : styles.category
                }
                onClick={() =>
                  setCategory(category === "Social media" ? "All" : "Social media")
                }
              >
                Social Media
              </p>
              <p
                className={
                  category === "Blog" ? styles.active : styles.category
                }
                onClick={() =>
                  setCategory(category === "Blog" ? "All" : "Blog")
                }
              >
                Blog
              </p>
              <p
                className={
                  category === "Landing Page" ? styles.active : styles.category
                }
                onClick={() =>
                  setCategory(
                    category === "Landing Page" ? "All" : "Landing Page",
                  )
                }
              >
                Landing Page
              </p>
              <p
                className={
                  category === "Personal Website"
                    ? styles.active
                    : styles.category
                }
                onClick={() =>
                  setCategory(
                    category === "Personal Website"
                      ? "All"
                      : "Personal Website",
                  )
                }
              >
                Personal Website
              </p>
            </div>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <div className={styles.portfolioCart}>
                {datas.map((data) => {
                  if (category === "All" || category === data.category) {
                    return (
                      <div key={data._id}>
                        <PortfolioCart
                          setCategory={setCategory}
                          category={category}
                          data={data}
                        />
                      </div>
                    );
                  }
                  // No return null here
                })}
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
