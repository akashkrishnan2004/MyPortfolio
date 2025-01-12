import React from "react";
import "./css/footerSection.css";

function FooterSection () {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <p className="footer-name">Designed by Akash Krishnan</p>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Akash Krishnan | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
