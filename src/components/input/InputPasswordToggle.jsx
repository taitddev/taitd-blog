import React, { useState } from "react";
import Input from "./Input";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputPasswordToggle = ({ name, control }) => {
  const [showPassword, setShowPassword] = useState(false);
  if (!control) return null;

  return (
    <>
      <Input
        name={name}
        type={showPassword ? "text" : "password"}
        control={control}
        placeholder="Enter your password"
      >
        {showPassword ? (
          <AiOutlineEye
            fontSize={26}
            color="#b2b3bd"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        ) : (
          <AiOutlineEyeInvisible
            fontSize={26}
            color="#b2b3bd"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        )}
      </Input>
    </>
  );
};

export default InputPasswordToggle;
