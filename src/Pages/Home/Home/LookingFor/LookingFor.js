import React from "react";

const LookingFor = () => {
  return (
    <div className="text-center   my-16">
      <p className="text-3xl  font-bold">What are you looking for?</p>
      <div className="flex space-x-8 justify-center my-8 ">
        <a
          href="#_"
          class="inline-flex font-semibold items-center  px-6 py-3 border border-orange-400 text-yellow-500  bg-white rounded-lg hover:border-none hover:bg-yellow-500 hover:text-white"
        >
          I need a therapist
        </a>
        <p className="my-auto">Or,</p>
        <a
          href="#_"
          class="inline-flex font-semibold items-center  px-6 py-3 border border-orange-400 hover:text-yellow-500 hover:border hover:border-orange-500   hover:bg-white rounded-lg  bg-yellow-500 border-orange-100 text-white"
        >
          I need a therapist
        </a>
      </div>
    </div>
  );
};

export default LookingFor;
