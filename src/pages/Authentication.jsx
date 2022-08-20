import React, { Children, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logo.svg";

const AuthenticationStyles = styled.div`
  min-height: 100vh;
  padding: 40px;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .have-account {
    margin-bottom: 30px;
    text-align: center;
    a {
      display: inline-block;
      text-decoration: underline;
      color: ${(props) => props.theme.primary};
      font-weight: 500;
    }
  }
`;

const Authentication = ({ children }) => {
  return (
    <AuthenticationStyles>
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <h1 className="heading">
          Taitd
          <span className="text-secondary">.dev</span>
        </h1>
        {children}
      </div>
    </AuthenticationStyles>
  );
};

export default Authentication;
