import React, { useState } from "react";
import styles from "./AboutCom.module.css";
import Link from "next/link";
import { SiReactos } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { AboutData } from "../AboutData/AboutData";

const AboutComp = () => {
  const [moreDetails, setMoreDetails] = useState("PRESENT");
  return (
    <div className={styles.container} id="about">
      <div className={styles.imageB4}>
        <div className={styles.animation}>
          <Link href="www.linkedin.com/in/asehinde-juwon-73b04b268">
            <CiLinkedin className={styles.animination_iconLink} />
          </Link>
          <Link href="https://github.com/Empire688682">
            <BsGithub className={styles.animination_iconLink} />
          </Link>
        </div>
        <div className={styles.hireMe_Con}>
          <h4>Let make it possible</h4>
          <div className={styles.links}>
            <a className={styles.btn} href="mailto:asehindej@gmail.com">
              HIRE ME
            </a>
          </div>
        </div>
      </div>
      <div className={styles.textCon}>
        <h3>ABOUT ME</h3>
        <h1>PERSONAL DETAILS</h1>
        <p>
          I&#39;m a Full Stack Web and Software Developer skilled in JavaScript,
          PHP, Node.js, and database management, with expertise in React,
          Next.js, Three.js and MongoDB. I continuously advance my career by
          learning and growing. I work closely with clients to deliver
          efficient, scalable solutions that solve real-world problems.
          Let&#39;s bring your ideas to life.
        </p>
        <div className={styles.more_details}>
          <h2>More Details</h2>
          {AboutData.map((data) => (
            <div key={data.title} className={styles.more_details_container}>
              <div className={styles.more_details_header}>
                {" "}
                <h2>{data.title}</h2>
                {data.title === moreDetails ? (
                  <CiCircleMinus
                    className={styles.more_icon}
                    onClick={() => setMoreDetails("")}
                  />
                ) : (
                  <CiCirclePlus
                    className={styles.more_icon}
                    onClick={() => setMoreDetails(data.title)}
                  />
                )}
              </div>
              {moreDetails === data.title ? (
                <>
                  <p>{data.text}</p>
                  <p>{data.date}</p>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
