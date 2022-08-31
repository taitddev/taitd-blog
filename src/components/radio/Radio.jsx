import React from "react";
import { useController } from "react-hook-form";
import { AiOutlineCheck } from "react-icons/ai";

const Radio = ({ checked, children, control, name, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <label>
      <input
        checked={checked}
        type="radio"
        className="hidden-input"
        {...field}
        {...rest}
      />

      <div className="flex items-center gap-x-3 font-medium cursor-pointer">
        <div
          className={`w-7 h-7 rounded-full border flex items-center justify-center p-1  ${
            checked
              ? "bg-primary border-primary text-white"
              : "border-gray-200 text-transparent"
          }`}
        >
          <AiOutlineCheck />
        </div>
        <span>{children}</span>
      </div>
    </label>
  );
};

export default Radio;
