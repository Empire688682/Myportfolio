"use client";
import "./globals.css";
import Navbar from "@/Component/navbar/Navbar";
import Footer from "@/Component/Footer/Footer";
import { useState, useEffect } from "react";
import Head from "next/head";

///export const metadata = {
//title: "JayEmpire",
// description: "This is Juwon Asehinde Personal Portfoilio",
//};

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // This code will only run in the browser
    if (typeof window !== "undefined") {
      // Safe to use window here
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        setTheme(theme);
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <html lang="en">
      <Head>
        <title>JayEmpire</title>
        <meta
          name="description"
          content="This is JayEmpire personal Portfolio"
        />
        <meta name="author" content="JayEmpire" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <meta property="og:title" content="JayEmpire" />
        <meta
          property="og:description"
          content="This is a description of my Next.js app"
        />
        <meta property="og:image" content="URL to your image" />
        <meta property="og:url" content="URL of your app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JayEmpire" />
        <meta
          name="twitter:description"
          content="This is JayEmpire ersonal Portfolio"
        />
        <meta name="twitter:image" content="URL to your image" />
      </Head>
      <body className={theme === "light" ? "container" : "container dark-mode"}>
        <Navbar theme={theme} setTheme={setTheme} toggleTheme={toggleTheme} />
        <div className="Content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
