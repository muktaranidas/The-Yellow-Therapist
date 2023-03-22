import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import LookingFor from "./LookingFor/LookingFor";
import Payment from "./Payment/Payment";
import Question from "./Question/Question";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LookingFor></LookingFor>
      <Payment></Payment>
      <About></About>
      <Question></Question>
    </div>
  );
};

export default Home;
