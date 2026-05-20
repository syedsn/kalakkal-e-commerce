import "./OfferSection.css";

import birthday from "../assets/offers/birthday.png";
import combo from "../assets/offers/combo.png";
import flat from "../assets/offers/flat.png";

export default function OfferSection() {
  const offers = [
    {
      title: "Birthday Special",
      text: "Gifts They'll Always Remember",
      image: birthday,
      button: "Shop Now",
      type: "blue",
    },
    {
      title: "Combo Offers",
      text: "Best Deals in One Place",
      image: combo,
      button: "Shop Now",
      type: "cream",
    },
    {
      title: "Flat 20% Off",
      text: "On All Prepaid Orders",
      image: flat,
      button: "Order Now",
      type: "blue",
    },
    {
      title: "Special Offers",
      text: "Best Deals in One Place",
      image: combo,
      button: "Shop Now",
      type: "cream",
    },
  ];

  return (
    <section className="offer-section">
      {offers.map((item) => (
        <div className={`offer-card ${item.type}`} key={item.title}>
          <div className="offer-content">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button>{item.button}</button>
          </div>

          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </section>
  );
}