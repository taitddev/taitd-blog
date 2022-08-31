import React from "react";

const Logo = ({ className }) => {
  return (
    <>
      <h1 className={`text-primary ${className}`}>
        Taitd
        <span className={`text-secondary ${className}`}>.dev</span>
      </h1>
    </>
  );
};

export default Logo;
