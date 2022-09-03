import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Heading from "../components/layout/Heading";

const Category = () => {
  const [posts, setPosts] = useState([]);
  const params = useParams();

  return (
    <Layout>
      <div className="container">
        <div className="pt-10"></div>
        <Heading>Danh mục {params.slug}</Heading>
        <div className="grid-layout grid-layout--primary">
          {/* {posts.map((item) => (
            <PostItem key={item.id} data={item}></PostItem>
          ))} */}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
