"use client";
import styles from "./Contact.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const url = "https://emailsocket-1.onrender.com/";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async () => {
    try {
      setLoading(true);
      const response = await axios.post(url + "submit", formData);
      if (response.data.success) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setMessage(response.data.message);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      console.log(
        "ERROR:",
        error.response ? error.response.data : error.message,
      );
      window.alert("An error occurred");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactHead}>
        <h1>Contact</h1>
        <div className={styles.headLinks}>
          <Link
            id="Link"
            href="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            Home
          </Link>
          <>
            <FaArrowRightLong style={{ width: "50px", color: "white" }} />
          </>
          <Link
            id="Link"
            href="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6980570086575!2d3.4764790736500792!3d6.559746622743857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf27318f770c9%3A0x57a197a85265e736!2s13%20Kosebinu%20St%2C%20Ikorodu%2C%20Ibeshe%20104102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1727440164951!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactLeft}>
          <div className={styles.contactLeftCon}>
            <GoHome className={styles.icons} />
            <div>
              <h2>Ikorodu Lagos, Nigeria</h2>
              <p>13 Koshebinu Street IbsheTitun</p>
            </div>
          </div>
          <div className={styles.contactLeftCon}>
            <BsTelephone className={styles.icons} />
            <div>
              <h2>
                <a href="tel:+2349154358139">+234 9154 3581 39</a>
              </h2>
              <p>Mon to Sat 8am to 10pm</p>
            </div>
          </div>
          <div className={styles.contactLeftCon}>
            <CiMail className={styles.icons} />
            <div>
              <h2>
                <a href="mailto:asehindej@gmail.com">asehindej@gmail.com</a>
              </h2>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div className={styles.contactRight}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                id="name"
                placeholder="Enter your name"
                required
              />
              <input
                type="mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                placeholder="Enter email address"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                id="message"
                placeholder="Enter subject"
                required
              />
            </div>
            <div className={styles.textera}>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                cols="30"
                rows="7"
                placeholder="Enter message"
                required
              ></textarea>
              {message ? <p>{message}</p> : null}
              <button type="submit">{loading ? "Sending..." : "Send"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
