import React from "react";

const FollowUsBtn = ({ icon }) => {
  return (
    <button
      type="button"
      className="text-white  w-6 h-6 md:w-8 md:h-8   p-0.5   bg-secondary-600 size-10  hover:bg-secondary-700 focus:ring-4 focus:outline-none  focus:ring-secondary-700 font-medium rounded-sm md:p-2.5 text-center inline-flex items-center justify-center  dark:focus:ring-secondary-600"
    >
      {icon}
    </button>
  );
};

export default FollowUsBtn;
