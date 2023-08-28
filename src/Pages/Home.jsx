import React from "react";
import Hero from "../Components/Hero";
import TopCurrencies from "../Components/TopCurrencies";
import LatestNews from "../Components/LatestNews";

const Home = () => {
  return (
    <>
      <Hero />
      <TopCurrencies />
      <LatestNews />
    </>
  );
};

export default Home;
