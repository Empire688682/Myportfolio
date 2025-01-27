"use client";
import React, { useState } from "react";
import style from "./Admin.module.css";
import Image from "next/image";
import axios from "axios";

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    category: "",
    link: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

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
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setSuccess("Failed to add data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    addDataToDb();
  };

  return (
    <div className={style.container}>
      <h1>Admin Panel</h1>
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
            type="text"
            name="title"
            value={data.title}
            onChange={handleOnChange}
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="category"
            value={data.category}
            onChange={handleOnChange}
            placeholder="Category"
            required
          />
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
  );
};

export default Page;
