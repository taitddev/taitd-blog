import React from "react";
import styled from "styled-components";

import { useAuth } from "../../context/AuthContext";
import { Outlet } from "react-router-dom";

import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import NotFound from "../../pages/NotFound";

const DashboardStyles = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  .dashboard {
    &-heading {
      font-weight: bold;
      font-size: 25px;
      margin-bottom: 5px;
      color: ${(props) => props.theme.black};
    }
    &-short-desc {
      font-size: 14px;
      color: ${(props) => props.theme.gray80};
    }
    &-main {
      display: grid;
      grid-template-columns: 300px minmax(0, 1fr);
      padding: 40px 20px;
      gap: 0 40px;
      align-items: start;
    }
    @media screen and (max-width: 1023.98px) {
      &-heading {
        font-size: 20px;
      }
      &-main {
        grid-template-columns: 100%;
        padding: 20px;
      }
    }
  }
`;

const DashboardLayout = () => {
  const { user } = useAuth();

  if (!user) return <NotFound />;

  return (
    <DashboardStyles>
      <DashboardHeader />
      <div className="dashboard-main">
        <Sidebar />
        <div className="dashboard-children">
          <Outlet />
        </div>
      </div>
    </DashboardStyles>
  );
};

export default DashboardLayout;