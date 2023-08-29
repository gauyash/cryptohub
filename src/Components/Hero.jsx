import React, { useEffect } from "react";
import "./../styles/Hero.scss";
import millify from "millify";
import { useDispatch, useSelector } from "react-redux";
import { fetchCrypto } from "./app/slice/Crypto";
import { MutatingDots } from "react-loader-spinner";

const Hero = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.crypto);
  const data = state.data?.data?.stats;

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  if (state.isLoading) {
    return (
      <div className="loading-container flex items-center justify-center">
        <MutatingDots
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="8.5"
          ariaLabel="mutating-dots-loading"
        />
      </div>
    );
  }


  return (
    <main>
      <section className="hero container">
        <h1 className="hero_heading font-medium">Global Crypto Stats</h1>

        {data ? (
          <div className="hero_stats">
            <div className="first_col">
              <div>
                <p className="hero_stats_heading">Total Cryptocurrencies</p>
                <h3 className="hero_stats_amount">{data.total}</h3>
              </div>
              <div>
                <p className="hero_stats_heading">Total MarketCap</p>
                <h3 className="hero_stats_amount">
                  {millify(data.totalMarketCap)}
                </h3>
              </div>
              <div>
                <p className="hero_stats_heading">Total Markets</p>
                <h3 className="hero_stats_amount">{data.totalMarkets}</h3>
              </div>
            </div>

            <div className="second_col">
              <div>
                <p className="hero_stats_heading">Total Exchanges</p>
                <h3 className="hero_stats_amount">{data.totalExchanges}</h3>
              </div>
              <div>
                <p className="hero_stats_heading">Total 24h Volume</p>
                <h3 className="hero_stats_amount">
                  {millify(data.total24hVolume)}
                </h3>
              </div>
            </div>
          </div>
        ) : (
          <p>No data</p>
        )}
      </section>
    </main>
  );
};

export default Hero;
