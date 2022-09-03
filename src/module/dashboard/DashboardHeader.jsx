import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { useAuth } from "../../context/AuthContext";
import { urlPath } from "../../utils/urlPath";

import logo from "../../assets/logo.svg";
import Button from "../../components/button/Button";
import Logo from "../../components/logo/Logo";

const DashboardHeaderStyles = styled.div`
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  .logo {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    font-weight: 600;
    img {
      max-width: 40px;
    }
  }
  .header-avatar {
    width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const DashboardHeader = () => {
  const { user } = useAuth();
  return (
    <DashboardHeaderStyles>
      <NavLink to={urlPath.HOME} className="logo">
        <img src={logo} alt="logo" className="logo" />
        <Logo className="text-4xl" />
      </NavLink>
      <div className="header-right">
        <Button to={urlPath.POST_ADD} className="header-button" height="52px">
          Viết bài
        </Button>
        <Link to={urlPath.PROFILE} className="header-avatar">
          <img src={user?.image} alt="" />
        </Link>
      </div>
    </DashboardHeaderStyles>
  );
};

export default DashboardHeader;
