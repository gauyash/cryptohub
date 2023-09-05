import React, { useEffect } from "react";
import CardCurrencies from "../Components/CardCurrencies";

const CryptoCurrencies = ({setIsToggle}) => {


  useEffect(() => {
    setIsToggle(false); 
  },[setIsToggle]);

  return (
    <section>

      <CardCurrencies simplified={false} />
    </section>
  );
};

export default CryptoCurrencies;
