"use client";
import styles from "./Portfolio.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import PortfolioCart from "@/Component/PortfolioComp/Portfolio";
import { datas } from "@/Component/PortfolioData/PortfolioData.js";
import { useRef, useState } from "react";

const Portfolio = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className={styles.container}>
      <div className={styles.portfolioHead}>
        <h1>Portfolio</h1>
        <div className={styles.headLinks}>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <FaArrowRightLong style={{ width: "50px", color: "white" }} />
          <Link
            href="/portfolio"
            style={{ color: "white", textDecoration: "none" }}
          >
            Portfolio
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.portfolioConHead}>
          <h1>Our Latest Featured Projects</h1>
          <p>Who are in extremely love with eco-friendly systems.</p>
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
              setCategory((prev) =>
                prev === "Portfolio" ? "All" : "Portfolio",
              )
            }
          >
            Portfolio
          </p>
          <p
            className={
              category === "e-Commerce" ? styles.active : styles.category
            }
            onClick={() =>
              setCategory((prev) =>
                prev === "e-Commerce" ? "All" : "e-Commerce",
              )
            }
          >
            e-Commerce
          </p>
          <p
            className={category === "Blog" ? styles.active : styles.category}
            onClick={() =>
              setCategory((prev) => (prev === "Blog" ? "All" : "Blog"))
            }
          >
            Blog
          </p>
          <p
            className={
              category === "Landing Page" ? styles.active : styles.category
            }
            onClick={() =>
              setCategory((prev) =>
                prev === "Landing Page" ? "All" : "Landing Page",
              )
            }
          >
            Landing Page
          </p>
          <p
            className={
              category === "Personal Website" ? styles.active : styles.category
            }
            onClick={() =>
              setCategory((prev) =>
                prev === "Personal Website" ? "All" : "Personal Website",
              )
            }
          >
            Personal Website
          </p>
        </div>
        <div className={styles.portfolioCart}>
          {datas.map((data) => {
            if (category === "All" || category === data.category) {
              return (
                <div>
                  <PortfolioCart
                    setCategory={setCategory}
                    category={category}
                    data={data}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
