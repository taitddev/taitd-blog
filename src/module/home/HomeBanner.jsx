import React from "react";
import styled from "styled-components";

import bannerImage from "../../assets/img-banner.png";
import Button from "../../components/button/Button";

const HomeBannerStyles = styled.div`
  min-height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  margin-bottom: 60px;

  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-content {
      max-width: 600px;
      color: white;
    }
    &-heading {
      margin-bottom: 20px;
      font-weight: bold;
    }

    &-text {
      line-height: 2;
      margin-bottom: 20px;
    }
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h2 className="banner-heading">Monkey Blog</h2>
            <p className="banner-text">
              Proin eget tortor risus. Donec sollicitudin molestie malesuada.
              Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada
              feugiat. Curabitur aliquet quam id dui posuere blandit. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
              ullamcorper sit amet ligula. Donec sollicitudin molestie
              malesuada.
            </p>

            <Button kind="secondary" height="60px" to="signup">
              Get Started
            </Button>
          </div>
          <div className="banner-image">
            <img src={bannerImage} alt="banner" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
