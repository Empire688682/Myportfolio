
"use client"
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Links from './links/Links';
import Link from 'next/link';

const Navbar = ({ theme, toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.container}>
      <Link href='/'>
        <div className={styles.logo}>
          <img
            src='/favicon.ico'
            alt='logo'
            width="40px"
          />
        </div>
      </Link>
      <div className={styles.modeCon}>
        {
          theme === "light" ? (
            <div className={styles.icons} onClick={() => toggleTheme()}>
              <img
                src='/moon_icon.png'
                alt='moon icon'
                width="40px"
              />
            </div>
          ) : (
            <div className={styles.icons} onClick={() => toggleTheme()}>
              <img
                src='/sun_icon.png'
                alt='sun icon'
                width="40px"
              />
            </div>
          )
        }
      </div>
      <Links setShowMenu={setShowMenu} showMenu={showMenu} />
      <div className={styles.menuIcon}>
        {
          showMenu ? (
            <div className={styles.menu_icons} onClick={() => setShowMenu(!showMenu)}>
              <img
                src={theme === "dark" ? "/light_close_menu.png" : "/dark_close_menu.png"}
                alt='close menu icon'
                width="40px"
              />
            </div>
          ) : (
            <div className={styles.menu_icons} onClick={() => setShowMenu(!showMenu)}>
              <img
                src={theme === "dark" ? "/light_menu.png" : "/dark_menu.png"}
                alt='menu icon'
                width="40px"
              />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Navbar;
