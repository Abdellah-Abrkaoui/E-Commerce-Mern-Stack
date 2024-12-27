import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import Testimonials from "../components/Testimonials";
import NewsLetter from "../components/NewsLetter";

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Testimonials />
      <NewsLetter />
    </div>
  );
}

export default Home;
