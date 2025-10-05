"use client";
import styles from "./Links.module.css";
import NavbarLink from "../NavbarLink/NavbarLink";

const Links = ({ setShowMenu, showMenu }) => {
  const AllLink = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/#about",
    },
    {
      title: "Service",
      path: "/#service",
    },
    {
      title: "Projects",
      path: "/project",
    },
    {
      title: "3D Portfolio",
      path: "https://jayempire-3d.vercel.app/",
    },
    {
      title: "Contact",
      path: "/#contact",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {AllLink.map((link, i) => {
          return <NavbarLink key={i} link={link} />;
        })}
      </div>
      <div
        className={`${styles.mobileMenu} ${showMenu && styles.mobileMenuShow}`}
      >
        {AllLink.map((link, i) => {
          return <NavbarLink setShowMenu={setShowMenu} key={i} link={link} />;
        })}
      </div>
    </div>
  );
};

export default Links;
