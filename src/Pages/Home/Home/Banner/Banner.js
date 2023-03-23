import React from "react";
import bannerImg from "../../../../Images/Banner/BannerImg.png";

const Banner = () => {
  return (
    <div className="my-8  ">
      <img src={bannerImg} alt="" className="border border-orange-600" />
    </div>
  );
};

export default Banner;
