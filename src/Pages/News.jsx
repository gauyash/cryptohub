import React,{useEffect} from "react";
import CardNews from "../Components/CardNews";

const News = ({setIsToggle}) => {

  useEffect(() => {
    setIsToggle(false); 
  },[setIsToggle]);

  return (
    <section>
      <CardNews simplified={false} />
    </section>
  );
};

export default News;
