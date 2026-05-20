import { ShieldCheck, BadgeDollarSign, BadgeCheck, ShoppingBag } from "lucide-react";
import "./TrustSection.css";

export default function TrustSection() {
  const items = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Great Quality",
      text: "Handpicked Products",
    },
    {
      icon: <BadgeDollarSign size={28} />,
      title: "Best Prices",
      text: "Unbeatable Deals",
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "Trusted by Thousands",
      text: "Happy Customers",
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "Hassle Free Shopping",
      text: "Easy & Secure",
    },
  ];

  return (
    <section className="trust-section">
      {items.map((item) => (
        <div className="trust-item" key={item.title}>
          <div className="trust-icon">{item.icon}</div>

          <div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}