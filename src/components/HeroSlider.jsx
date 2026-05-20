import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./HeroSlider.css";

import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";

const slides = [
  {
    title: "Extra Special",
    subTitle: "With Perfect Gifts",
    text: "Gifts for every occasion, for every emotion. Celebrate happiness, love & togetherness.",
    image: hero1,
  },
  {
    title: "Fresh Fashion",
    subTitle: "For Every Style",
    text: "Trendy fashion picks for men, women and kids.",
    image: hero2,
  },
  {
    title: "Wellness Picks",
    subTitle: "Healthy Everyday",
    text: "Shop wellness essentials, candles, herbal products and more.",
    image: hero3,
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-slider">
      <button className="hero-arrow hero-left" onClick={prevSlide}>
        <ChevronLeft size={25} />
      </button>

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-small">Make Every Moment</p>
          <h1>{slides[active].title}</h1>
          <h2>{slides[active].subTitle}</h2>
          <p className="hero-desc">{slides[active].text}</p>
          <button className="hero-btn">Shop Now</button>
        </div>

        <div className="hero-image-box">
          <img src={slides[active].image} alt="hero" />
        </div>
      </div>

      <button className="hero-arrow hero-right" onClick={nextSlide}>
        <ChevronRight size={25} />
      </button>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}