import React from "react";
import handshake from "../../../../Images/Animation/Handshake.gif";
import leptop from "../../../../Images/Animation/leptop.gif";
import talk from "../../../../Images/Animation/talk.gif";

const DetailsAboutPage = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 p-0  dark:text-gray-100"></section>
      <div className="container p-0 m-0   flex flex-col justify-center  mx-auto sm:py-12  lg:flex-row lg:justify-between w-3/4">
        <img src={handshake} alt="" className="w-[300px] h-[400px] " />
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-xl text-yellow-500 font-bold  sm:text-3xl">
            A bridge between...
          </p>
          <p className="mt-6 mb-8 text-sm w-4/5 sm:mb-12">
            A platform serving both of who seeks professional help for their
            mental well being and the professional therapists who are always
            ready to help. We're providing a smooth bridge between these two.
          </p>
        </div>
      </div>
      <div className="container flex flex-col  justify-center  mx-auto sm:py-12  lg:flex-row lg:justify-between w-3/4">
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-xl text-yellow-500 font-bold  sm:text-3xl">
            A bridge between...
          </p>
          <p className="mt-6 mb-8 text-sm w-4/5 sm:mb-12">
            A platform serving both of who seeks professional help for their
            mental well being and the professional therapists who are always
            ready to help. We're providing a smooth bridge between these two.
          </p>
        </div>
        <img src={leptop} alt="" className="w-[350px] " />
      </div>{" "}
      <div className="container  mt-[-3] flex flex-col justify-center  my-0 mx-auto sm:py-12  lg:flex-row lg:justify-between w-3/4">
        <img src={talk} alt="" className="w-[350px] " />
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-xl text-yellow-500 font-bold  sm:text-3xl">
            A bridge between...
          </p>
          <p className="mt-6 mb-8 text-sm w-4/5 sm:mb-12">
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
