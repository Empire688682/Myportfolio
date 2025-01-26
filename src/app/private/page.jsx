"use client";
import React, { useState } from 'react';
import style from "./Private.module.css";
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import axios from 'axios';

const Page = () => {
    const [showPassword, setShowPasswor] = useState(false);
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    const registerUser = async () => {
        try {
            setLoading(true);
            const response = await axios.post("api/auth/signup", data);
            if (response.success) {
                setData({
                    email: "",
                    password: ""
                })
            }
        } catch (error) {
            console.log("Error:", error);
        }
        finally {
            setLoading(false);
        }
    };

    const handleSubmission = (e) => {
        e.preventDefault();
    }

    return (
        <div className={style.private}>
            <h1>Welcome to your private room</h1>
            <form>
                <input className={style.emailInput} onChange={handleOnchange} type="email" value={data.email} name="email" placeholder='Email' required />
                <div className={style.pwdCon}>
                    <input className={style.pwdConInput} onChange={handleOnchange} value={data.password} type={`${showPassword ? "text" : "password"}`} name="password" placeholder='Password' required />
                    <p onClick={() => setShowPasswor(!showPassword)}>{
                        showPassword ? <BiSolidHide /> : <BiShow />
                    }
                    </p>
                </div>
                <input className={style.submitInput} type="submit" value="FIRE" />
            </form>
        </div>
    )
}

export default Page
