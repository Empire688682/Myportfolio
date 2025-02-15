"use client";
import React, { useEffect, useState } from "react";
import style from "./Private.module.css";
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/Component/Context";
import dotenv from "dotenv";
dotenv.config();

const Page = () => {
  const { logoutAdmin } = useGlobalContext();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [giveAccess, setGiveAccess] = useState(false);
  const [signupState, setSignupState] = useState("signup");
  const [userAccessData, setUserAccessData] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("userAccessData");
      setUserAccessData(storedData ? JSON.parse(storedData) : "");
    }
  }, []);

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [accessCode, setAccessCode] = useState("");

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const userControler = async () => {
    const baseUrl =
      signupState === "signup" ? "api/auth/signup" : "api/auth/login";
    try {
      setLoading(true);
      const response = await axios.post(baseUrl, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.success) {
        setData({
          username: "",
          email: "",
          password: "",
          emailOrUsername: "",
        });
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "userAccessData",
            JSON.stringify(response.data.data),
          );
        }
        alert(response.data.message);
        router.push("/admin");
      }
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
    userControler();
  };

  const handleGiveAccess = () => {
    if (Number(accessCode) === Number(process.env.ADMIN_PASS_KEY)) {
      setGiveAccess(true);
    } else {
      alert(`Invalid Access Code :${Number(process.env.ADMIN_PASS_KEY)}, ${accessCode}`);
    }
  };

  if (!giveAccess) {
    return (
      <div className={style.giveAccess}>
        <h2>Enter Your Access Code</h2>
        <input
          type="text"
          onChange={(e) => setAccessCode(e.target.value)}
          value={accessCode}
          name="code"
          placeholder="Access Code"
        />
        <button onClick={handleGiveAccess}>Submit</button>
      </div>
    );
  }

  return (
    <section>
      {!userAccessData && (
        <div className={style.private}>
          <ul className={style.privateLinks}>
            <li
              className={signupState === "login" ? style.active : ""}
              onClick={() => setSignupState("login")}
            >
              Login
            </li>
            <li
              className={signupState === "signup" ? style.active : ""}
              onClick={() => setSignupState("signup")}
            >
              Signup
            </li>
          </ul>
          <h1>Welcome to your private room</h1>
          <form onSubmit={handleSubmission}>
            {signupState === "signup" && (
              <input
                className={style.emailInput}
                onChange={handleOnchange}
                type="text"
                value={data.username}
                name="username"
                placeholder="Username"
                required
              />
            )}
            {signupState === "signup" && (
              <input
                className={style.emailInput}
                onChange={handleOnchange}
                type="email"
                value={data.email}
                name="email"
                placeholder="Email"
                required
              />
            )}
            {signupState === "login" && (
              <input
                className={style.emailInput}
                onChange={handleOnchange}
                type="text"
                value={data.emailOrUsername}
                name="emailOrUsername"
                placeholder="Email or Username"
                required
              />
            )}
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
              <p onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <BiSolidHide /> : <BiShow />}
              </p>
            </div>
            {errorMsg && <span>{errorMsg}</span>}
            <input
              disabled={loading}
              className={style.submitInput}
              type="submit"
              value={loading ? "Loading......" : "FIRE"}
            />
          </form>
        </div>
      )}
      {userAccessData && (
        <div className={style.private}>
          <button className={style.logout} onClick={logoutAdmin}>
            LOGOUT
          </button>
        </div>
      )}
    </section>
  );
};

export default Page;
