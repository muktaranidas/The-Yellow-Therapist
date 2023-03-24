import React from "react";
import handshake from "../../../../Images/Animation/Handshake.gif";
import leptop from "../../../../Images/Animation/leptop.gif";
import talk from "../../../../Images/Animation/talk.gif";

const DetailsAboutPage = () => {
  return (
    <div>
      <section className=""></section>
      <div className="container lg:-mb-20  flex flex-col justify-center  mx-auto lg:flex-row lg:justify-between w-3/4">
        <img src={handshake} alt="" className="w-[300px] h-[400px] " />
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-xl text-colorYellow font-bold  sm:text-3xl">
            A bridge between...
          </p>
          <p className="mt-6 mb-8 text-sm w-5/6 sm:mb-12">
            A platform serving both of who seeks professional help for their
            mental well being and the professional therapists who are always
            ready to help. We're providing a smooth bridge between these two.
          </p>
        </div>
      </div>
      <div className="container flex flex-col lg:-mb-20   justify-center  mx-auto   lg:flex-row lg:justify-between w-3/4">
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-xl text-colorYellow font-bold  sm:text-3xl">
            those who need help...
          </p>
          <p className="mt-6 mb-8 text-sm w-5/6 sm:mb-12">
            Something ails? Hey, seeking help is the most humane thing we can
            do. It's not always easy on our own. This is the place where you get
            the proper help you need.
          </p>
        </div>
        <div className="w-5/6">
          <img src={leptop} alt="" className="w-[350px] " />
        </div>
      </div>{" "}
      <div className="container  lg:mt-[-20] flex flex-col justify-center  my-0 mx-auto lg:flex-row lg:justify-between w-3/4">
        <img src={talk} alt="" className="w-[350px] " />
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-xl text-colorYellow font-bold  sm:text-3xl">
            and those who can provide.
          </p>
          <p className="mt-6 mb-8 text-sm w-5/6 sm:mb-12">
            Are you a professional therapist? We're providing a structured
            platform to reach out to those who need your help. An independant
            platform to work on your own schedule and demand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsAboutPage;
