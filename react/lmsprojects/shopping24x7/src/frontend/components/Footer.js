import React from "react";
import '../css/App.css';

function Footer() {
  return (
    <div className="main-footer">
          <p>
            &copy;{new Date().getFullYear()} Shop 24x7 | All rights reserved by Santosh|
            Terms Of Service | Privacy
          </p>
    </div>
  );
}

export default Footer;