import React from "react";

const Action = ({ onClick = () => {}, children }) => {
  return (
    <span
      className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded cursor-pointer"
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Action;
