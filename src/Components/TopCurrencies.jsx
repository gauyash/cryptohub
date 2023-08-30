import React from "react";
import { Link } from "react-router-dom";
import CardCurrencies from "./CardCurrencies";
import { Icon } from '@iconify/react';
import './../styles/TopCurrencies.scss'

const TopCurrencies = () => {
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="heading font-medium">Top 10 Cryptocurrencies in the World</h2>
        <Link to="/cryptocurrencies"><Icon icon="fluent-mdl2:go" width="15" /></Link>
      </div>
      <CardCurrencies simplified={true} />
    </section>
  );
};

export default TopCurrencies;
