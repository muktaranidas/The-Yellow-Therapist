import React from "react";

const FixedButton = () => {
  return (
    <div className=" absolute ">
      <div className="flex lg:flex hidden  flex-col right-16 bottom-64 fixed space-y-8  ">
        <a
          href="#_"
          class="inline-flex font-semibold items-center rounded-3xl  px-6 py-3 border border-gray-400 text-colorYellow  bg-white "
        >
          RUMUNA
        </a>
        <a
          href="#_"
          class="inline-flex font-semibold items-center rounded-3xl  px-6 py-3 border border-gray-400 text-colorYellow  bg-white  hover:border hover:bg-colorYellow hover:text-white"
        >
          TYT Vent
        </a>
      </div>
    </div>
  );
};

export default FixedButton;
