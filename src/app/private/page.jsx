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

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const registerUser = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/auth/signup", data);
      if (response.data.success) {
        setData({
          email: "",
          password: "",
        });
      } else {
        setErrorMsg(response.data.message);
      }
    } catch (error) {
      setErrorMsg("An error occured");
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

  return (
    <div className={style.private}>
      <h1>Welcome to your private room</h1>
      <form onSubmit={handleSubmission}>
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
