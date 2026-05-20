import { Search, Heart, ShoppingCart, User } from "lucide-react";
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Kalakkal Logo" />
      </div>

      <div className="navbar-search">
        <select>
          <option>All Categories</option>
          <option>Fashion</option>
          <option>Accessories</option>
          <option>Toys</option>
          <option>Gift Items</option>
          <option>Wellness</option>
        </select>

        <input
          type="text"
          placeholder="Search for products, brands and more..."
        />

        <button>
          <Search size={24} />
        </button>
      </div>

      <div className="navbar-icons">
        <div className="nav-item">
          <div className="icon-box">
            <Heart size={26} />
            <span>3</span>
          </div>
          <p>Wishlist</p>
        </div>

        <div className="nav-item">
          <div className="icon-box">
            <ShoppingCart size={26} />
            <span>2</span>
          </div>
          <p>Cart</p>
        </div>

        <div className="user-box">
          <User size={27} />
          <div>
            <h4>Hi, User</h4>
            <p>My Account⌄</p>
          </div>
        </div>
      </div>
    </header>
  );
}