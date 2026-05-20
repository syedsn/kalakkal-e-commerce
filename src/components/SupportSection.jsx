import { Truck, LockKeyhole, RefreshCcw, Headphones } from "lucide-react";
import "./SupportSection.css";

export default function SupportSection() {
  const items = [
    {
      icon: <Truck size={34} />,
      title: "Free Delivery",
      text: "On orders above ₹999",
    },
    {
      icon: <LockKeyhole size={34} />,
      title: "Secure Payments",
      text: "100% safe & secure",
    },
    {
      icon: <RefreshCcw size={34} />,
      title: "Easy Returns",
      text: "7 days return policy",
    },
    {
      icon: <Headphones size={34} />,
      title: "24/7 Support",
      text: "We're here to help",
    },
  ];

  return (
    <section className="support-section">
      {items.map((item) => (
        <div className="support-item" key={item.title}>
          <div className="support-icon">{item.icon}</div>
          <div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}