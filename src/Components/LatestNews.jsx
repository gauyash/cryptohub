import React from "react";
import { Link } from "react-router-dom";
import CardNews from "./CardNews";
import { Icon } from '@iconify/react';
import './../styles/TopCurrencies.scss'

const LatestNews = () => {
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="heading font-medium">Latest Crypto News</h2>
        <Link to="/news"><Icon icon="fluent-mdl2:go" width="15" /></Link>
      </div>
      <CardNews simplified={true} />
    </section>
  );
};

export default LatestNews;
