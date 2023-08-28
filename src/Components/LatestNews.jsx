import React from "react";
import { Link } from "react-router-dom";
import CardNews from "./CardNews";
const LatestNews = () => {
  return (
    <section>
      <div>
        <h2 className="heading">Top 10 Cryptocurrencies in the World</h2>
        <Link to="/news">Show More</Link>
      </div>

      <CardNews />
    </section>
  );
};

export default LatestNews;
