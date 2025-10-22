"use client";
import styles from "./Portfolio.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import PortfolioSection from "@/Component/PortfolioComp/Portfolio";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "@/Component/LoadingSpinner/LoadingSpinner";

const Portfolio = () => {
  const [datas, setDatas] = useState([]);
  const [category, setCategory] = useState("All");
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
    <div className={styles.container}>
      <div className={styles.portfolioHead}>
        <h1>Projects</h1>
        <div className={styles.headLinks}>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <FaArrowRightLong style={{ width: "50px", color: "white" }} />
          <Link
            href="/project"
            style={{ color: "white", textDecoration: "none" }}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.portfolioConHead}>
          <h1>My All Featured Projects</h1>
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
              category === "Web Apps" ? styles.active : styles.category
            }
            onClick={() =>
              setCategory((prev) =>
                prev === "Web Apps" ? "All" : "Web Apps",
              )
            }
          >
            Web Apps
          </p>
          <p
            className={
              category === "e-Commerce / Fintech" ? styles.active : styles.category
            }
            onClick={() =>
              setCategory((prev) =>
                prev === "e-Commerce / Fintech" ? "All" : "e-Commerce / Fintech",
              )
            }
          >
            e-Commerce / Fintech
          </p>
          <p
            className={
              category === "Mobile Apps" ? styles.active : styles.category
            }
            onClick={() =>
              setCategory((prev) =>
                prev === "Mobile Apps" ? "All" : "Mobile Apps",
              )
            }
          >
            Mobile Apps
          </p>
          <p
            className={
              category === "AI & Data" ? styles.active : styles.category
            }
            onClick={() =>
              setCategory(category === "AI & Data" ? "All" : "AI & Data")
            }
          >
            AI & Data
          </p>
          <p
            className={
              category === "Landing Pages & Personal" ? styles.active : styles.category
            }
            onClick={() =>
              setCategory((prev) =>
                prev === "Landing Pages & Personal" ? "All" : "Landing Pages & Personal",
              )
            }
          >
            Landing Pages & Personal
          </p>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className={styles.portfolioCart}>
            {[...datas].reverse().map((data) => {
              if (category === "All" || category === data.category) {
                return (
                  <div key={data.id}>
                    <PortfolioSection
                      setCategory={setCategory}
                      category={category}
                      data={data}
                    />
                  </div>
                );
              }
             <p>No return null here</p>
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
