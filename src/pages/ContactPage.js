import React from "react";
import Nav from "../components/Nav";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "./pages.css";

const ContactPage = () => {
  return (
    <div className="page-container">
      <Nav />
      <div className="page-content-container">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
