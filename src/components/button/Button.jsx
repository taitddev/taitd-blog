import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import LoadingSpinner from "../loading/LoadingSpinner";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 20px;
  border-radius: 8px;
  color: #fff;
  line-height: 1;
  font-weight: 500;
  font-size: 20px;
  height: ${(props) => props.height || "70px"};

  ${(props) =>
    props.maxWidth &&
    css`
      width: 100%;
      max-width: ${(props) => props.maxWidth};
    `};

  ${(props) =>
    props.kind === "primary" &&
    css`
      background-color: ${(props) => props.theme.primary};
      margin: 0 auto;
    `};

  ${(props) =>
    props.kind === "secondary" &&
    css`
      color: ${(props) => props.theme.primary};
      background-color: white;

      font-size: 18px;
    `};

  ${(props) =>
    props.kind === "ghost" &&
    css`
      color: ${(props) => props.theme.primary};
      background-color: rgba(29, 192, 113, 0.1);
    `};

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

/**
 * @param {*} onClick Handler onClick event
 * @requires
 * @param {string} type Type of button "button" | "submit"
 */
const Button = ({
  onClick = () => {},
  type = "button",
  kind = "primary",
  loading = false,
  children,
  to,
  ...props
}) => {
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to} className="inline-block">
        <ButtonStyles type={type} kind={kind} {...props}>
          {children}
        </ButtonStyles>
      </NavLink>
    );
  }
  return (
    <ButtonStyles type={type} onClick={onClick} kind={kind} {...props}>
      {loading ? <LoadingSpinner /> : children}
    </ButtonStyles>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
