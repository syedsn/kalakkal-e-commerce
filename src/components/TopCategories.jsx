import "./TopCategories.css";

import men from "../assets/top-categories/men.png";
import women from "../assets/top-categories/women.png";
import kids from "../assets/top-categories/kids.png";
import watch from "../assets/top-categories/watch.png";
import shoes from "../assets/top-categories/shoes.png";
import bag from "../assets/top-categories/bag.png";
import decor from "../assets/top-categories/decor.png";
import gift from "../assets/top-categories/gift.png";

export default function TopCategories() {
  const categories = [
    { title: "Men's Wear", image: men },
    { title: "Women's Wear", image: women },
    { title: "Kids Wear", image: kids },
    { title: "Watches", image: watch },
    { title: "Shoes", image: shoes },
    { title: "Handbags", image: bag },
    { title: "Home Decor", image: decor },
    { title: "Personalised Gifts", image: gift },
  ];

  return (
    <section className="top-category-section">
      <div className="top-category-header">
        <h2>Shop By Top Categories</h2>
        <button>View All ›</button>
      </div>

      <div className="top-category-list">
        {categories.map((item) => (
          <div className="top-category-card" key={item.title}>
            <div className="top-category-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}