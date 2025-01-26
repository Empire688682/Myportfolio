"use client";
import React, { useState } from 'react';
import style from "./Private.module.css";
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

const Page = () => {
    const [showPassword, setShowPasswor] = useState(false);
    return (
        <div className={style.private}>
            <h1>Welcome to your private room</h1>
            <form>
                <input className={style.emailInput} type="email" name="email" placeholder='Email' />
                <div className={style.pwdCon}>
                    <input className={style.pwdConInput} type={`${showPassword? "text":"password"}`} name="password" placeholder='Password' />
                    <p onClick={()=>setShowPasswor(!showPassword)}>{
                        showPassword ? <BiSolidHide /> : <BiShow />
                    }
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Page
