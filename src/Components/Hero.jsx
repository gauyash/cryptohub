import React from "react";

const Hero = () => {
  return (
    <main>
      <section className="hero">
        <h1 className="hero_heading">Global Crypto Stats</h1>

        <div className="hero_stats">
          <div className="first_col">
            <div>
              <p className="hero_stats_heading">Total Cryptocurrencies</p>
              <h3 className="hero_stats_amount">29,107</h3>
            </div>
            <div>
              <p className="hero_stats_heading">Total MarketCap</p>
              <h3 className="hero_stats_amount">1.1T</h3>
            </div>
            <div>
              <p className="hero_stats_heading">Total Markets</p>
              <h3 className="hero_stats_amount">34.9K</h3>
            </div>
          </div>

          <div className="second_col">
            <div>
              <p className="hero_stats_heading">Total Exchanges</p>
              <h3 className="hero_stats_amount">161</h3>
            </div>
            <div>
              <p className="hero_stats_heading">Total 24h Volume</p>
              <h3 className="hero_stats_amount">19.4B</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
