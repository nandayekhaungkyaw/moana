"use client";
import React from "react";

const Button = ({ className, children, filled = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        filled
          ? `bg-gradient-to-r from-primary to-secondary-500 text-white flex items-center justify-center py-2 px-6 h-[36px] rounded-tr-lg rounded-bl-lg ${className} box-border`
          : `flex items-center justify-center py-2 px-6 h-[36px] border-2 border-primary rounded-tr-lg rounded-bl-lg ${className} box-border`
      }
    >
      {children}
    </button>
  );
};

export default Button;
