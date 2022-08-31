import React, { useState } from "react";
import styled from "styled-components";

import Heading from "../../components/layout/Heading";

const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);

  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Bài viết nổi bật</Heading>
        {/* <div className="grid-layout">
          {posts.length > 0 &&
            posts.map((post) => (
              <PostFeatureItem key={post.id} data={post}></PostFeatureItem>
            ))}
        </div> */}
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
