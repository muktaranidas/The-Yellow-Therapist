import React from "react";
import animation from "../../../../Images/Animation/leptop.mp4";

const DetailsAboutPage = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <img src={animation} alt="" />
          <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <p className="text-xl font-bold  sm:text-3xl">
              A bridge between...
            </p>
            <p className="mt-6 mb-8 text-md sm:mb-12">
              A platform serving both of who seeks professional help for their
              mental well being and the professional therapists who are always
              ready to help. We're providing a smooth bridge between these two.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsAboutPage;
