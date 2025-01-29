"use client";
import React, { useState } from "react";
import style from "./Private.module.css";
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import axios from "axios";

const Page = () => {
  const [showPassword, setShowPasswor] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [giveAccess, setGiveAccess] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [accessCode, setAccessCode] = useState({
    code:"",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const registerUser = async () => {
    try {
      setLoading(true);
      const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      const response = await axios.post(`${baseURL}/api/auth/signin`, data);
      setData({
        name:"",
        email: "",
        password: "",
      });
      alert(response.data.message);
    } catch (error) {
      if (error.response) {
        // Backend returned an error response (status 4xx or 5xx)
        alert(error.response.data.message || "An error occurred");
      } else {
        // Network error or other unexpected errors
        setErrorMsg("An unexpected error occurred");
      }
      setInterval(() => {
        setErrorMsg("");
      }, 3000);
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    registerUser();
  };

  const handleAccessCodeOnchange = (e) => {
    const { name, value } = e.target;
    setAccessCode((prev) => ({ ...prev, [name]: value }));
  };

  const handleGiveAccess = () => {
    if(Number(accessCode.code ) === Number(process.env.NEXT_PUBLIC_ADMIN_PASS_KEY)){
      setGiveAccess(true);
    }
    else{
      alert("Wrong Access Code");
    }
  };

  if(!giveAccess){
    return (
      <div className={style.giveAccess}>
        <h2>Enter Your Access Code</h2>
        <input type="text" onChange={handleAccessCodeOnchange} value={accessCode.code} name="code" placeholder="Access Code" />
        <button onClick={handleGiveAccess}>Submit</button>
      </div>
    );
  }

  return (
    <div className={style.private}>
      <h1>Welcome to your private room</h1>
      <form onSubmit={handleSubmission}>
        <input
          className={style.emailInput}
          onChange={handleOnchange}
          type="text"
          value={data.name}
          name="name"
          placeholder="Name"
          required
        />
        <input
          className={style.emailInput}
          onChange={handleOnchange}
          type="email"
          value={data.email}
          name="email"
          placeholder="Email"
          required
        />
        <div className={style.pwdCon}>
          <input
            className={style.pwdConInput}
            onChange={handleOnchange}
            value={data.password}
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            placeholder="Password"
            required
          />
          <p onClick={() => setShowPasswor(!showPassword)}>
            {showPassword ? <BiSolidHide /> : <BiShow />}
          </p>
        </div>
        {errorMsg && <span>{errorMsg}</span>}
        <input
          className={style.submitInput}
          type="submit"
          value={loading ? "Loading......" : "FIRE"}
        />
      </form>
    </div>
  );
};

export default Page;
