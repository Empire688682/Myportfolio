"use client";
import "./globals.css";
import Navbar from "@/Component/navbar/Navbar";
import Footer from "@/Component/Footer/Footer";
import { useState, useEffect } from "react";
import Head from "next/head";
import { AppProvider } from "@/Component/Context";

//export const metadata = {
//title: "JayEmpire",
// description: "This is Juwon Asehinde Personal Portfolio",
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
      </Head>
      <body className={theme === "light" ? "container" : "container dark-mode"}>
        <AppProvider>
          <Navbar theme={theme} setTheme={setTheme} toggleTheme={toggleTheme} />
          <div className="Content">{children}</div>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
