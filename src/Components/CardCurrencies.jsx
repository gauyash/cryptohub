import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCrypto } from "./app/slice/Crypto";
import { MutatingDots } from "react-loader-spinner";
import millify from "millify";

const CardCurrencies = ({ simplified }) => {
  const value = simplified ? 10 : 50;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.crypto);
  const data = state.data?.data?.coins.slice(0, value);
  const [cryptoData, setCryptoData] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  useEffect(() => {
    const filterData = data?.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setCryptoData(filterData);
  }, [search, state]);

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


  const currenciesElements = cryptoData?.map((item) => {
    return (
      <div key={item.uuid} className="card shadow">
        
        <div className="flex items-center justify-between">
          <h3 className="card_heading">{`${item.rank} ${item.name}`}</h3>
          <img src={item.iconUrl} alt="" width="30px" />
        </div>
        <div className="flex flex-col gap-4 pt-6">
          <p className="card_price">{`Price: ${millify(item.price)}`}</p>
          <p className="card_cap">{`Market Cap: ${millify(item.marketCap)}`}</p>
          <p className="card_change">{`Daily Change: ${item.change}%`}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="card_layout flex mb-7">
      {data && (
        <>
          {!simplified ? (
            <input
              placeholder="Search"
              className="p-3 search border"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          ) : (
            ""
          )}
          {currenciesElements}
        </>
      )}
    </div>
  );
};

export default CardCurrencies;
