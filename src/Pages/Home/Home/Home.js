import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import LookingFor from "./LookingFor/LookingFor";
import Question from "./Question/Question";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LookingFor></LookingFor>
      <About></About>
      <Question></Question>
    </div>
  );
};

export default Home;
