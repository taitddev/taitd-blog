import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.h2`
  font-size: 30px;
  position: relative;
  margin-bottom: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.pixiePowder};
  padding: 10px 0;

  &:before {
    content: "";
    width: 50px;
    height: 4px;
    background-color: ${(props) => props.theme.vividSkyBlue};
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, -150%);
  }

  @media screen and (max-width: 1023.98px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;
const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;
