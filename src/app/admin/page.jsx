"use client";
import React, { useState } from "react";
import style from "./Admin.module.css";
import Image from "next/image";

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    image:"",
    title:"",
    category:"",
    link:""
  });

  const handleOnchange = (e) =>{
    const {name, value} = e.target;
    setData((prev)=>({...prev, [name]:value}));
  }

  return (
    <div className={style.container}>
      <h1>Admin Panel</h1>
      <div className={style.addDataContainer}>
        <form>
          <label htmlFor="image">
            <Image src="/image_placeholder.webp" alt="" width={300} height={200}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </label>
          <input type="text" name="title" value={data.title} onChange={handleOnchange} placeholder="Title" required />
          <input type="text" name="category" value={data.category} onChange={handleOnchange} placeholder="Category" required/>
          <input type="file" src="" alt="" id="image"  placeholder="Image" hidden/>
          <input type="text" name="link" value={data.link} onChange={handleOnchange} placeholder="link" required/>
          <button type="submit">Add Data</button>
        </form>
      </div>
    </div>
  );
};

export default Page;
