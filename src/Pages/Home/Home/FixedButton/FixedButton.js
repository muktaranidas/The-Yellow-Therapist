import React from "react";

const FixedButton = () => {
  return (
    <div className=" absolute">
      <div className="flex flex-col right-16 bottom-64 fixed space-y-8  ">
        <a
          href="#_"
          class="inline-flex font-semibold items-center rounded-3xl  px-6 py-3 border border-gray-400 text-yellow-500   bg-white "
        >
          RUMUNA
        </a>
        <a
          href="#_"
          class="inline-flex font-semibold items-center rounded-3xl  px-6 py-3 border border-gray-400 text-yellow-500   bg-white  hover:border-none hover:bg-yellow-500 hover:text-white"
        >
          TYT Vent
        </a>
      </div>
    </div>
  );
};

export default FixedButton;
