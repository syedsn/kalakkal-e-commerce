import { useRef } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import "./ProductSection.css";

import watch from "../assets/products/watch.jpg";
import bag from "../assets/products/bag.jpg";
import perfume from "../assets/products/perfume.jpg";
import teddy from "../assets/products/teddy.jpg";
import cake from "../assets/products/cake.jpg";

export default function ProductSection() {
  const sliderRef = useRef(null);

  const products = [
    {
      name: "Fastrack Analog Watch",
      category: "Accessories",
      price: "₹1,699",
      oldPrice: "₹1,999",
      rating: "4.5",
      reviews: "120",
      image: watch,
      offer: "-15%",
    },
    {
      name: "Lavie Women Handbag",
      category: "Accessories",
      price: "₹1,299",
      oldPrice: "₹1,899",
      rating: "4.3",
      reviews: "80",
      image: bag,
    },
    {
      name: "Bella Vita Luxury Perfume",
      category: "Wellness",
      price: "₹599",
      oldPrice: "₹999",
      rating: "4.6",
      reviews: "96",
      image: perfume,
    },
    {
      name: "Soft Teddy Bear (25cm)",
      category: "Toys",
      price: "₹399",
      oldPrice: "₹599",
      rating: "4.4",
      reviews: "70",
      image: teddy,
    },
    {
      name: "Choco Truffle Cake",
      category: "Gift Items",
      price: "₹699",
      oldPrice: "₹899",
      rating: "4.7",
      reviews: "60",
      image: cake,
    },
    {
      name: "Lavie Women Handbag",
      category: "Accessories",
      price: "₹1,299",
      oldPrice: "₹1,899",
      rating: "4.3",
      reviews: "80",
      image: bag,
    },
    {
      name: "Bella Vita Luxury Perfume",
      category: "Wellness",
      price: "₹599",
      oldPrice: "₹999",
      rating: "4.6",
      reviews: "96",
      image: perfume,
    },
    {
      name: "Choco Truffle Cake",
      category: "Gift Items",
      price: "₹699",
      oldPrice: "₹899",
      rating: "4.7",
      reviews: "60",
      image: cake,
    },
  ];

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 260,
      behavior: "smooth",
    });
  };

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -260,
      behavior: "smooth",
    });
  };

  return (
    <section className="product-section">
      <div className="product-header">
        <h2>Trending Products</h2>
        <button>View All ›</button>
      </div>

      <div className="product-slider-wrapper">
        <button className="slider-arrow left-arrow" onClick={slideLeft}>
          <ChevronLeft size={24} />
        </button>

        <div className="product-slider" ref={sliderRef}>
          {products.map((item, index) => (
            <div className="product-card" key={`${item.name}-${index}`}>
              {item.offer && <span className="offer-badge">{item.offer}</span>}

              <div className="product-image">
                <img src={item.image} alt={item.name} />

                <button className="add-cart-btn">
                  <ShoppingCart size={16} />
                  Add To Cart
                </button>
              </div>

              <div className="product-info">
                <h3>{item.name}</h3>
                <p>{item.category}</p>

                <div className="product-bottom">
                  <div className="price-box">
                    <strong>{item.price}</strong>
                    <span>{item.oldPrice}</span>
                  </div>

                  <div className="rating">
                    <span>★</span> {item.rating} ({item.reviews})
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-arrow right-arrow" onClick={slideRight}>
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}