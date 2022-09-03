import React from "react";
import styled from "styled-components";

const DashboardHeadingStyles = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  color: black;

  .clip {
    clip-path: polygon(0 0, 0% 100%, 100% 50%);
  }
`;

const DashboardMainHeading = ({ title = "", description, children }) => {
  return (
    <DashboardHeadingStyles>
      <div>
        <h1 className="mb-4">{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {children}
    </DashboardHeadingStyles>
  );
};

export default DashboardMainHeading;
