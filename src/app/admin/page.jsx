"use client";
import React, { useState } from "react";
import style from "./Admin.module.css";
import Image from "next/image";
import axios from "axios";
import { useGlobalContext } from "@/Component/Context";
import { LuLogOut } from "react-icons/lu";
import PortfolioData from "@/Component/PortfolioData/PortfolioData";

const Page = () => {
  const { logoutAdmin } = useGlobalContext();
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    category: "",
    link: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [menu, setMenu] = useState("add");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const addDataToDb = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("link", data.link);

    try {
      setLoading(true);
      const response = await axios.post("/api/data/add", formData);
      if (response.data.success) {
        setData({
          title: "",
          category: "",
          link: "",
        });
        setImage(null);
        setSuccess("Data added successfully!");
        setInterval(() => {
          setSuccess(null);
        }, 2000);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setSuccess("Failed to add data. Please try again.");
      setInterval(() => {
        setSuccess(null);
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (!image || !data.title || !data.category || !data.link) {
      setSuccess("All feild required");
      return;
    }
    addDataToDb();
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1>Admin Panel</h1>
        <p className={style.logout} onClick={logoutAdmin}>
          <LuLogOut /> <span>Logout</span>
        </p>
      </div>
      <ul className={style.adminMenus}>
        <li
          className={menu === "add" ? style.active : ""}
          onClick={() => setMenu("add")}
        >
          Add
        </li>
        <li
          className={menu === "list" ? style.active : ""}
          onClick={() => setMenu("list")}
        >
          List
        </li>
      </ul>
      {menu === "add" && (
        <div>
          <h2>Add data</h2>
          <div className={style.addDataContainer}>
            <form onSubmit={handleFormSubmission}>
              <label htmlFor="image">
                <Image
                  src={
                    image
                      ? window.URL.createObjectURL(image)
                      : "/image_placeholder.webp"
                  }
                  alt=""
                  width={300}
                  height={200}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                alt=""
                id="image"
                placeholder="Image"
                hidden
              />
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleOnChange}
                placeholder="Title"
                required
              />
              <select
                name="category"
                onChange={handleOnChange}
                value={data.category}
              >
                <option value="" disabled>
                  Choose Category
                </option>
                <option value="Portfolio">Portfolio</option>
                <option value="e-Commerce">e-Commerce</option>
                <option value="Social media">Social Media</option>
                <option value="Blog">Blog</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Personal Website">Personal Website</option>
              </select>
              <input
                type="text"
                name="link"
                value={data.link}
                onChange={handleOnChange}
                placeholder="Link"
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "Adding..." : "Add Data"}
              </button>
            </form>
            {success && <p>{success}</p>}
          </div>
        </div>
      )}

      {menu === "list" && (
        <div>
          <h2>Data list</h2>
          <div className={style.addDataContainer}>
            <PortfolioData/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
