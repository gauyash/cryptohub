import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import TopCurrencies from "../Components/TopCurrencies";
import LatestNews from "../Components/LatestNews";

const Home = ({setIsToggle}) => {
  
  useEffect(() => {
    setIsToggle(false); 
  },[setIsToggle]);
  return (
    <>
      <>
        <Hero />
        <TopCurrencies />
        <LatestNews />
      </>
    </>
  );
};

export default Home;
