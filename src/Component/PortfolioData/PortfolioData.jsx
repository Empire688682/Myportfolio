"use client";
import React, { useEffect, useState } from 'react';
import style from "./PortfolioData.module.css";
import axios from 'axios';
import Image from 'next/image';
import { LiaTimesSolid } from "react-icons/lia";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const PortfolioData = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false)
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/data/get");
      if (response.data.success) {
        setDatas(response.data.data);
      }
      console.log("response::", response)
    } catch (error) {
      console.log("FetchData Error:", error);
    }
    finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeData = async (id) =>{
    try {
      const response = await axios.post("/api/data/remove", {id});
      if(response.data.success){
        fetchData();
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  return (
    <div className={style.container}>
      <div className={style.headers}>
        <div>Title</div>
        <div className={style.imageDiv}>Image</div>
        <div>Category</div>
        <div>Link</div>
        <div>Remove</div>
      </div>
      {
        loading ?
          <LoadingSpinner />
          :
          <>
            {
              datas.length > 0 ?
                <div>
                  {
                    [...datas].reverse().map((data) => (
                      <div className={style.footers} key={data._id}>
                        <div>{data.title}</div>
                        <div className={style.imageDiv}>
                          <Image src={data.image} alt='Img' width={80} height={50} sizes='100%' />
                        </div>
                        <div>{data.category}</div>
                        <div><a href={data.link} target="_blank">Link</a></div>
                        <div><LiaTimesSolid className={style.removeIcon} onClick={() => removeData(data._id)} /></div>
                      </div>
                    ))
                  }
                </div>
                :
                <h2>No data available</h2>
            }
          </>
      }
    </div>
  )
}

export default PortfolioData
