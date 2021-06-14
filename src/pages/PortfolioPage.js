import React from "react";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import "./pages.css";

const PortfolioPage = () => {
  return (
    <div className="page-container">
      <Nav />
      <div className="page-content-container">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
