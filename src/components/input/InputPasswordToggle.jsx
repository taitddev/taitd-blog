import React, { useState } from "react";
import Input from "./Input";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { labelName, placeholder } from "../../utils/properties";

const InputPasswordToggle = ({ name, control }) => {
  const [showPassword, setShowPassword] = useState(false);
  if (!control) return null;

  return (
    <>
      <Input
        name={name}
        type={showPassword ? "text" : "password"}
        control={control}
        placeholder={placeholder(labelName.PASSWORD)}
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
