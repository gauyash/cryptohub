import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsApi } from "./app/slice/NewsApi";
import { MutatingDots } from "react-loader-spinner";

const CardNews = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.newsApi);
  const data = state.data?.value;

  useEffect(() => {
    dispatch(fetchNewsApi());
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

  console.log(data);

  const newsElements = data?.map((item,index) => {
    return (
      <div key={index} className="card">
        <div className="flex items-center justify-between">
          <h3 className="card_heading">
            {item.name}
          </h3>
          <img src={item.image.thumbnail.contentUrl} alt="" width="100px" />
        </div>
        <div className="pt-7">
          <p className="card_desc">
           {item.description}
          </p>
          <div className="flex justify-between items-center pt-7">
            <div className="news_source flex items-center gap-3">
              <img src={item.provider[0].image.thumbnail.contentUrl} alt="" width="20px" />
              <p className="card_organization">{item.provider[0].name}</p>
            </div>
            <p className="card_time">an hour ago</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="card_layout flex">
      {data && newsElements}
    </div>
  );
};

export default CardNews;
