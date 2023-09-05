import { useParams, Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MutatingDots } from "react-loader-spinner";
import { Icon } from "@iconify/react";
import "./../styles/cryptoDetails.scss";
import millify from "millify";
import { fetchCryptoDetails } from "../Components/app/slice/cryptoDetailsApi";
const CryptoDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.cryptoDetails);
  const data = state?.data?.data?.coin;
  useEffect(() => {
    dispatch(fetchCryptoDetails(id));
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

  const linksElements = data?.links?.map((item, index) => {
    return (
      <li key={index} className="flex items-center justify-between py-10">
        <h6>{item.type}</h6>
        <Link className="text-blue-500 font-medium" to={item.url}>
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <section>
      {data && (
        <>
          <div className="header py-10">
            <h2 className="title font-bold text-center pb-3">{data.name}</h2>
            <p className="sub-title py-5">
              {`${data.name} live price in US dollars. View Value statistics, market`}
              cap and supply.
            </p>
          </div>
          <div className="value-statistics statistics">
            <h3 className="font-semibold pt-10 pb-1">
              {`${data.name} Value Statistics`}
            </h3>
            <p>{`An overview showing the stats of ${data.name}`}</p>

            {data && (
              <ul className="statistics_table py-8">
                <li className="flex items-center justify-between py-10">
                  <div className="flex items-center gap-4">
                    <Icon icon="teenyicons:bitcoin-outline" />
                    <p>Price to USD</p>
                  </div>
                  <h6 className="font-semibold">{`$ ${millify(
                    data.price
                  )}`}</h6>
                </li>

                <li className="flex items-center justify-between py-10">
                  <div className="flex items-center gap-4">
                    <Icon icon="icon-park-outline:ranking" />
                    <p>Rank</p>
                  </div>
                  <h6 className="font-semibold">{data.rank}</h6>
                </li>

                <li className="flex items-center justify-between py-10">
                  <div className="flex items-center gap-4">
                    <Icon icon="akar-icons:thunder" />
                    <p>24h Volume</p>
                  </div>
                  <h6 className="font-semibold">{`$ ${millify(
                    data["24hVolume"]
                  )}`}</h6>
                </li>

                <li className="flex items-center justify-between py-10">
                  <div className="flex items-center gap-4">
                    <Icon icon="simple-icons:coinmarketcap" />
                    <p>Market Cap</p>
                  </div>
                  <h6 className="font-semibold">{`$ ${millify(
                    data.marketCap
                  )}`}</h6>
                </li>

                <li className="flex items-center justify-between py-10">
                  <div className="flex items-center gap-4">
                    <Icon icon="mdi:prize" />
                    <p>All-time-high(daily avg.)</p>
                  </div>
                  <h6 className="font-semibold">{`$ ${millify(
                    data.allTimeHigh.price
                  )}`}</h6>
                </li>
              </ul>
            )}
          </div>
          <div className="other-statistics statistics">
            <h3 className="font-semibold pt-10 pb-1">
              {`${data.name} Other Statistics`}
            </h3>
            <p>
              An overview showing the generic Stats of all Crypto Currencies
            </p>

            {data && (
              <ul className="statistics_table py-8">
                <li className="flex items-center justify-between py-10">
                  <div className="flex items-center gap-4">
                    <Icon icon="healthicons:market-stall-outline" />
                    <p>Number of Markets</p>
                  </div>
                  <h6 className="font-semibold">{data.numberOfMarkets}</h6>
                </li>

                <li className="flex items-center justify-between py-10">
                  <div className="flex items-center gap-4">
                    <Icon icon="ri:exchange-line" />
                    <p>Number of Exchanges</p>
                  </div>
                  <h6 className="font-semibold">{data.numberOfExchanges}</h6>
                </li>

                <li className="flex items-center justify-between py-10">
                  <div className="flex items-center gap-4">
                    <Icon icon="material-symbols:info-outline" />
                    <p>Approved Supply</p>
                  </div>
                  <h6 className="font-semibold">
                    {data.supply.confirmed ? (
                      <Icon icon="material-symbols:check" />
                    ) : (
                      <Icon icon="charm:cross" />
                    )}
                  </h6>
                </li>

                <li className="flex items-center justify-between py-10">
                  <div className="flex items-center gap-4">
                    <Icon icon="material-symbols:info-outline" />
                    <p>Total Supply</p>
                  </div>
                  <h6 className="font-semibold">{`$ ${millify(
                    data.supply.total
                  )}`}</h6>
                </li>

                <li className="flex items-center justify-between py-10">
                  <div className="flex items-center gap-4">
                    <Icon icon="material-symbols:info-outline" />
                    <p>Circulating Supply</p>
                  </div>
                  <h6 className="font-semibold">{`$ ${millify(
                    data.supply.circulating
                  )}`}</h6>
                </li>
              </ul>
            )}
          </div>
          <div className="links pt-8">
            <h3 className="font-semibold">{`${data.name} Links`}</h3>

            <ul className="py-8">{linksElements}</ul>
          </div>
        </>
      )}
    </section>
  );
};

export default CryptoDetails;
