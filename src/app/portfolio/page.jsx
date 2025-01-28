"use client";
import styles from "./Portfolio.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import PortfolioCart from "@/Component/PortfolioComp/Portfolio";
import { datas } from "@/Component/PortfolioData/PortfolioData.js";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "@/Component/LoadingSpinner/LoadingSpinner";


const Portfolio = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("api/data/get");
      if(response.success){
        setData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    finally{
      setLoading(false);
    }
  };

  console.log("data:", data)

  useEffect(() => {
    getData();
  }, []);
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
        {
          loading ? (
            <LoadingSpinner />
          ) : (
            <div className={styles.portfolioCart}>
              {datas.map((data) => (
                <PortfolioCart key={data.id} data={data} category={category} />
              ))}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Portfolio;
