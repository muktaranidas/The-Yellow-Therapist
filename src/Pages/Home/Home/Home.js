import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import LookingFor from "./LookingFor/LookingFor";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LookingFor></LookingFor>
      <About></About>
    </div>
  );
};

export default Home;
