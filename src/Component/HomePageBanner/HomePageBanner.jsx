import React, { useEffect, useRef, useState } from "react";
import styles from "./HomePageBanner.module.css";

const HomePageBanner = () => {
  const columnsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  // Function to count up to the target number
  const countUp = (target, element) => {
    let count = 0;
    const increment = Math.ceil(target / 100); // Adjust speed
    const interval = setInterval(() => {
      count += increment;
      element.textContent = count;
      if (count >= target) {
        clearInterval(interval);
        element.textContent = target; // Ensure it shows the target number
      }
    }, 100); // Adjust time as needed
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true); // Set to true when visible
          const targets = [80, 75, 100]; // Your target numbers
          targets.forEach((target, index) => {
            countUp(target, columnsRef.current[index]);
          });
          observer.unobserve(entry.target); // Stop observing after counting
        }
      });
    });

    columnsRef.current.forEach((col) => {
      if (col) observer.observe(col);
    });

    return () => {
      if (columnsRef.current) {
        columnsRef.current.forEach((col) => {
          if (col) observer.unobserve(col);
        });
      }
    };
  }, [isVisible]);

  return (
    <div className={styles.container}>
      <div className={styles.colum}>
        <h1 ref={(el) => (columnsRef.current[0] = el)}>0</h1>{" "}
        {/* Start from 0 */}
        <p>Projects Completed</p>
      </div>
      <div className={styles.colum}>
        <h1 ref={(el) => (columnsRef.current[1] = el)}>0</h1>
        <p>Happy Clients</p>
      </div>
      <div className={styles.colum}>
        <h1 ref={(el) => (columnsRef.current[2] = el)}>0</h1>
        <p>Real Professionals</p>
      </div>
    </div>
  );
};

export default HomePageBanner;
