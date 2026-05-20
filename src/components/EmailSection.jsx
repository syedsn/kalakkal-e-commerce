import "./EmailSection.css";

import emailImg from "../assets/categories/email-img.png";

export default function EmailSection() {
  return (
    <section className="email-section">
      <div className="email-left">
        <img src={emailImg} alt="Email Offer" />

        <div className="email-text">
          <h3>Never Miss an Offer!</h3>
          <p>
            Subscribe to get exciting offers, new arrivals & <br />
            personalised gift ideas.
          </p>
        </div>
      </div>

      <form className="email-form">
        <input type="email" placeholder="Enter your email address" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}