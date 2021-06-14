import React from "react";
import Nav from "../components/Nav";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import "./pages.css";

const ResumePage = () => {
  return (
    <div className="page-container">
      <Nav />
      <div className="page-content-container">
        <Resume />
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
