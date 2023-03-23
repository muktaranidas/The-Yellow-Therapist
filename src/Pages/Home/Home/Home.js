import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import DetailsAboutPage from "./DetailsAboutPage/DetailsAboutPage";
import FixedButton from "./FixedButton/FixedButton";
import FooterNav from "./FooterNav/FooterNav";
import LookingFor from "./LookingFor/LookingFor";
import Payment from "./Payment/Payment";
import Question from "./Question/Question";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LookingFor></LookingFor>
      <FixedButton></FixedButton>
      <DetailsAboutPage></DetailsAboutPage>
      <Payment></Payment>
      <About></About>
      <Question></Question>
      <FooterNav></FooterNav>
    </div>
  );
};

export default Home;
