import React from "react";
import Nav from "./Nav";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta keyword="Blog powered by Next.js" />
        <meta content="practice Next.js" />
      </Head>
      <Nav />
      <div style={{ padding: "0 60px", height: "100vh" }}>{children}</div>
    </>
  );
};

export default Layout;
