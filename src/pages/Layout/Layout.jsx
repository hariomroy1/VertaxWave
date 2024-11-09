// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Services from "../Services/service";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Services/>
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
