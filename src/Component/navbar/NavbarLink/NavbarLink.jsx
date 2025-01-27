"use client";
import Link from "next/link";
import React from "react";
import styles from "./NavbarLink.module.css";
import { usePathname } from "next/navigation";

const NavbarLink = ({ link, setShowMenu, showMenu }) => {
  const pathName = usePathname();
  return (
    <div className={styles.container}>
      <Link
        onClick={() => setShowMenu(!showMenu)}
        className={`${styles.link} ${link.path === pathName && styles.active}`}
        href={link.path}
      >
        {link.title}
      </Link>
    </div>
  );
};

export default NavbarLink;
