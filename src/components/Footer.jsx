import { Mail, Phone, MapPin, Send } from "lucide-react";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";

import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Footer */}
      <div className="footer-top">
        {/* Company Info */}
        <div className="footer-col company-col">
          <img src={logo} alt="Kalakkal" className="footer-logo" />

          <p>
            Kalakkal is your one-stop destination for fashion, gifts, wellness,
            toys and lifestyle shopping with exciting offers.
          </p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Offers</li>
            <li>Best Sellers</li>
            <li>New Arrivals</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-col">
          <h3>Shop Categories</h3>
          <ul>
            <li>Fashion</li>
            <li>Accessories</li>
            <li>Toys</li>
            <li>Gift Items</li>
            <li>Wellness</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h3>Customer Support</h3>
          <ul>
            <li>Track Order</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <Phone size={16} />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <Mail size={16} />
            <span>support@kalakkal.com</span>
          </div>

          <div className="contact-item">
            <MapPin size={16} />
            <span>Chennai, Tamil Nadu, India</span>
          </div>

          <div className="footer-subscribe">
            <input type="email" placeholder="Your email" />
            <button>
              <Send size={16} className="sendIcon"/>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2026 Kalakkal. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
