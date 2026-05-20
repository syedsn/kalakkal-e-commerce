import { Truck, Lock, Smartphone } from "lucide-react";
import "./TopNavbar.css";

export default function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="top-navbar-left">
        <span>
          <Truck size={15} />
          Free Shipping on orders above ₹999
        </span>

        <span>
          <Lock size={15} />
          Extra 10% off on Prepaid Orders
        </span>
      </div>

      <div className="top-navbar-right">
        {/* <span>
          <Smartphone size={15} />
          Download App
        </span> */}

        <span className="divider"></span>
        <span>Track Order</span>
        <span className="divider"></span>
        <span>Help &amp; Support</span>
      </div>
    </div>
  );
}