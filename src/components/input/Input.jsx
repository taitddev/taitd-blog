import React, { Children } from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const InputStyles = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: ${(props) =>
      props.hasIcon ? "16px 60px 16px 20px" : "16px 20px"};
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.antiFlashWhite};
    border-radius: 6px;
    transition: all 0.2s linear;
  }

  input::-webkit-input-placeholder {
    color: #b2b3bd;
  }
  input::-moz-input-placeholder {
    color: #b2b3bd;
  }

  input:focus {
    background-color: #fff;
    border-color: ${(props) => props.theme.primary};
  }

  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const Input = ({ name = "", control, type = "text", children, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <InputStyles hasIcon={children ? true : false}>
      <input id={name} type={type} {...field} {...props} />
      {children ? <div className="input-icon">{children}</div> : null}
    </InputStyles>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  type: PropTypes.string,
  children: PropTypes.any,
};

export default Input;
