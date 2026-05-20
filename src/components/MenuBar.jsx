import { Menu } from "lucide-react";
import "./MenuBar.css";

export default function MenuBar() {
  const menuItems = [
    "Fashion",
    "Accessories",
    "Toys",
    "Gift Items",
    "Wellness",
    "Offers",
    "New Arrivals",
    "Best Sellers",
  ];

  return (
    <div className="menu-wrapper">
      <nav className="menu-bar">
        <div className="shop-category">
          <Menu size={18} />
          Shop By Category
        </div>

        {menuItems.map((item) => (
          <div className="menu-item" key={item}>
            <span>{item}</span>

            <div className="mega-menu">
              <div className="mega-col">
                <h4>Must Haves</h4>
                <p>New Arrivals <b>New</b></p>
                <p>Best Sellers</p>
                <p>Trending Products</p>
                <p>Premium Collection</p>
                <p>Budget Deals</p>
                <p>Return Gifts</p>
              </div>

              <div className="mega-col gray">
                <h4>Prime Picks</h4>
                <p>All Products</p>
                <p>Top Rated</p>
                <p>Luxury Picks <b>New</b></p>
                <p>Festival Offers</p>
                <p>Combo Offers</p>
                <p>Special Deals</p>
              </div>

              <div className="mega-col">
                <h4>{item} Picks</h4>
                <p>For Men</p>
                <p>For Women</p>
                <p>For Kids</p>
                <p>Friends</p>
                <p>Family</p>
                <p>Corporate</p>
              </div>

              <div className="mega-col gray">
                <h4>Sub Categories</h4>
                <p>T-Shirts</p>
                <p>Formal Wear</p>
                <p>Sarees</p>
                <p>Kurtis</p>
                <p>Watches</p>
                <p>Handbags</p>
              </div>

              <div className="mega-col">
                <h4>Price Wise</h4>
                <p>Below ₹500</p>
                <p>₹500 - ₹1000</p>
                <p>₹1000 - ₹2000</p>
                <p>Above ₹2000</p>
              </div>

              <div className="mega-banner">
                <img
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=400&q=80"
                  alt="menu banner"
                />
                <div>{item}</div>
              </div>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}