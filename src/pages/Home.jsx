import React from "react";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import MenuBar from "../components/MenuBar";
import HeroSlider from "../components/HeroSlider";
import CategorySection from "../components/CategorySection";
import OfferSection from "../components/OfferSection";
import ProductSection from "../components/ProductSection";
import SupportSection from "../components/SupportSection";
import TopCategories from "../components/TopCategories";
import EmailSection from "../components/EmailSection";
import TrustSection from "../components/TrustSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <TopNavbar />
      <div className="sticky-header">
        <Navbar />
        <MenuBar />
      </div>

      <HeroSlider />
      <CategorySection />
      <OfferSection />
      <ProductSection />
      <SupportSection />
      <TopCategories />
      <EmailSection />
      <TrustSection />
      <Footer />
    </>
  );
}

export default Home;
