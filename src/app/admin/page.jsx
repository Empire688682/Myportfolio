"use client";
import React, { useState } from "react";
import style from "./Admin.module.css";
import Image from "next/image";

const Page = () => {
  const [image, setImage] = useState(null);
  return (
    <div className={style.container}>
      <h1>Amin Panel</h1>
      <div className={style.addDataContainer}>
        <form>
          <label htmlFor="image">
            <Image src="/image_placeholder.webp" alt="" width={100} height={100}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </label>
          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="category" placeholder="Category" required/>
          <input type="file" src="" alt="" id="image"  placeholder="Image" hidden/>
          <input type="text" name="link" placeholder="link" required/>
          <button type="submit">Add Data</button>
        </form>
      </div>
    </div>
  );
};

export default Page;
