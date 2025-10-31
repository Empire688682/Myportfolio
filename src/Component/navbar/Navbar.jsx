"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Links from "./links/Links";
import Link from "next/link";

const Navbar = ({ theme, activateTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.logo}>
          <img src="/favicon.ico" alt="logo" width="40px" />
        </div>
      </Link>
      <div className={styles.modeIcons} >
          <img src="/moon_icon.png" alt="moon icon" width="20px" onClick={() => activateTheme("dark")} />
          <img src="/sun_icon.png" alt="sun icon" width="20px" onClick={() => activateTheme("light")} />
       </div>
      <div onClick={() => setShowMenu(!showMenu)}>
        <Links setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
      <div className={styles.menuIcon}>
        {showMenu ? (
          <div
            className={styles.menu_icons}
            onClick={() => setShowMenu(!showMenu)}
          >
            <img
              src={
                theme === "dark"
                  ? "/light_close_menu.png"
                  : "/dark_close_menu.png"
              }
              alt="close menu icon"
              width="30px"
            />
          </div>
        ) : (
          <div
            className={styles.menu_icons}
            onClick={() => setShowMenu(!showMenu)}
          >
            <img
              src={theme === "dark" ? "/light_menu.png" : "/dark_menu.png"}
              alt="menu icon"
              width="30px"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
