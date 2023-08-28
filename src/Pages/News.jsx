import React from "react";
import CardNews from "../Components/CardNews";

const News = () => {
  return (
    <section>
      <form>
        <select name="" id="">
          <option hidden value="">
            Select a Crypto
          </option>
          <option value="">CryptoCurrency</option>
          <option value="">Bitcoin</option>
          <option value="">Dogecoin</option>
          <option value="">Ethereum</option>
          <option value="">BNB</option>
        </select>
      </form>

      <CardNews />
    </section>
  );
};

export default News;
