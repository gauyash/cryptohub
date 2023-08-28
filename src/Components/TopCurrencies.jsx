import React from "react";
import { Link } from "react-router-dom";
import CardCurrencies from "./CardCurrencies";

const TopCurrencies = () => {
  return (
    <section>
      <div>
        <h2 className="heading">Top 10 Cryptocurrencies in the World</h2>
        <Link to="/cryptocurrencies">Show More</Link>
      </div>
      <CardCurrencies />
    </section>
  );
};

export default TopCurrencies;
