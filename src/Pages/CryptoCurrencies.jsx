import React from "react";
import CardCurrencies from "../Components/CardCurrencies";

const CryptoCurrencies = () => {
  return (
    <section>
      <form>
        <input className="search" type="text" />
      </form>

      <CardCurrencies />
    </section>
  );
};

export default CryptoCurrencies;
