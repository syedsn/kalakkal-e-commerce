import "./CategorySection.css";

import fashion from "../assets/categories/fashion.png";
import accessories from "../assets/categories/accessories.png";
import toys from "../assets/categories/toys.jpg";
import gifts from "../assets/categories/gifts.jpg";
import wellness from "../assets/categories/wellness.png";
import offers from "../assets/categories/offers.png";

export default function CategorySection() {
  const categories = [
    { title: "Fashion", image: fashion },
    { title: "Accessories", image: accessories },
    { title: "Toys", image: toys },
    { title: "Gift Items", image: gifts },
    { title: "Wellness", image: wellness },
    { title: "Offers", image: offers },
  ];

  return (
    <section className="category-section">
      {categories.map((item) => (
        <div className="category-card" key={item.title}>
          <div className="category-image-circle">
            <img src={item.image} alt={item.title} />
          </div>
          <h4>{item.title}</h4>
        </div>
      ))}
    </section>
  );
}