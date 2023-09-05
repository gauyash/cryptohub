import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsApi } from "./app/slice/NewsApi";
import { fetchCrypto } from "./app/slice/Crypto";
import { MutatingDots } from "react-loader-spinner";
import "./../styles/CardNews.scss";
import moment from "moment/moment";
import { Link } from "react-router-dom";

const CardNews = ({ simplified }) => {
  const value = simplified ? 10 : 30;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const data = state.newsApi.data?.value.slice(0, value);
  const crypto = state.crypto.data?.data?.coins.slice(0, 10);
  const [searchTerm, setSearchTerm] = useState("cryptocurrency");
  useEffect(() => {
    dispatch(fetchNewsApi(searchTerm));
    !simplified ? dispatch(fetchCrypto()) : "";
  }, [dispatch, searchTerm]);

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

  const newsElements = data?.map((item, index) => {
    return (
      <div key={index} className="card">
        <Link to={item.url}>
        <div className="card_head flex items-center justify-between">
          <h3 className="card_heading font-semibold">{item.name}</h3>
          <img src={item.image?.thumbnail.contentUrl} />
        </div>
        <div className="card_body pt-7">
          <p className="card_desc">{item.description}</p>
          <div className="flex justify-between items-center pt-7">
            <div className="news_source flex items-center gap-3">
              <img
                src={item.provider[0].image?.thumbnail.contentUrl}
                alt=""
                width="30px"
              />
              <p className="card_organization">{item.provider[0].name}</p>
            </div>
            <p className="card_time">
              {moment(item.datePublished).startOf("ss").fromNow()}
            </p>
          </div>
        </div>
        </Link>

      </div>
    );
  });

  const cryptoElements = crypto?.map((item) => {
    return (
      <option key={item.uuid} value={item.name.toLowerCase()}>
        {item.name}
      </option>
    );
  });

  function handleClick(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="card_layout flex">
      {data && (
        <>
          {!simplified ? (
            <select
            style={{fontSize:"1.2rem"}}
              onClick={handleClick}
              className="mb-4 py-4 p-5"
              name=""
              id=""
            >
              <option hidden value="">
                Select a Crypto
              </option>
              <option value="">CryptoCurrency</option>
              {cryptoElements}
            </select>
          ) : (
            ""
          )}
          {newsElements}
        </>
      )}
    </div>
  );
};

export default CardNews;
