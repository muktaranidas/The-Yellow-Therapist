import React from "react";

const LookingFor = () => {
  return (
    <div className="text-center  ">
      <p className="text-3xl text-colorGray  font-bold ">
        What are you looking for?
      </p>
      <div className="flex space-x-8 justify-center my-8 ">
        <a
          href="#_"
          class="inline-flex font-semibold items-center  px-6 py-3 border-2 border-colorYellow text-colorYellow   bg-white rounded-lg hover:border-none hover:bg-colorYellow hover:text-white"
        >
          I need a therapist
        </a>
        <p className="my-auto">Or,</p>
        <a
          href="#_"
          class="inline-flex font-semibold items-center  px-6 py-3 border border-colorYellow hover:text-colorYellow hover:border hover:border-colorYellow   hover:bg-white rounded-lg  bg-colorYellow border-orange-100 text-white"
        >
          I am a therapist
        </a>
      </div>
    </div>
  );
};

export default LookingFor;
