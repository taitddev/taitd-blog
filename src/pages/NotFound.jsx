import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import notFoundImage from "../assets/404.png";
import Button from "../components/button/Button";

const NotFoundStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  .image {
    max-width: 250px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  .heading {
    font-weight: bold;
    margin-bottom: 20px;
  }

  .description {
    max-width: 800px;
    margin: 0 auto 20px;
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundStyles>
      <img src={notFoundImage} alt="notfound" className="image" />
      <h1 className="heading">404 - Looks like you're lost.</h1>
      <p className="description">
        Maybe this page used to exist or you just spelled something wrong.
        Chances are your spelled something wrong, so can you double check the
        URL?
      </p>
      <Button onClick={() => navigate("/")} className="back">
        Go back
      </Button>
    </NotFoundStyles>
  );
};

export default NotFound;
