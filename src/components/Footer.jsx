import React from "react";

function Footer() {
  return (
    <footer>

      <div className="footer-container">
        <div className="footer-section">
          <h3>Sneaker Store</h3>
          <p>We are a one-stop-shop for all your sneaker needs. From the latest releases to hard-to-find classics, we have it all.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
