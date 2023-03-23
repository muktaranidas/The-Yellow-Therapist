import React from "react";
import animation from "../../../../Images/Animation/leptop.gif";

const DetailsAboutPage = () => {
  return (
    <div>
      <section className="dark:bg-gray-800  dark:text-gray-100"></section>
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12  lg:flex-row lg:justify-between w-3/4">
        <img src={animation} alt="" className="w-[350px] " />
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-xl text-yellow-500 font-bold  sm:text-3xl">
            A bridge between...
          </p>
          <p className="mt-6 mb-8 text-md w-4/5 sm:mb-12">
            A platform serving both of who seeks professional help for their
            mental well being and the professional therapists who are always
            ready to help. We're providing a smooth bridge between these two.
          </p>
        </div>
      </div>
      <div className="container flex flex-col  justify-center p-6 mx-auto sm:py-12  lg:flex-row lg:justify-between w-3/4">
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-xl text-yellow-500 font-bold  sm:text-3xl">
            A bridge between...
          </p>
          <p className="mt-6 mb-8 text-md w-4/5 sm:mb-12">
            A platform serving both of who seeks professional help for their
            mental well being and the professional therapists who are always
            ready to help. We're providing a smooth bridge between these two.
          </p>
        </div>
        <img src={animation} alt="" className="w-[350px] " />
      </div>{" "}
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12  lg:flex-row lg:justify-between w-3/4">
        <img src={animation} alt="" className="w-[350px] " />
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-xl text-yellow-500 font-bold  sm:text-3xl">
            A bridge between...
          </p>
          <p className="mt-6 mb-8 text-md w-4/5 sm:mb-12">
            A platform serving both of who seeks professional help for their
            mental well being and the professional therapists who are always
            ready to help. We're providing a smooth bridge between these two.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsAboutPage;
