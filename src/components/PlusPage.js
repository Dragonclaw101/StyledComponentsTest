import React from "react";
import { Header } from "semantic-ui-react";

import Layout from "./Layout";

// [MF]: What makes this page "dynamic"?
const DynamicPage = () => {
  return (
    <Layout>
      <Header as="h2">This is my Dynamic page!</Header>
      <p>
        This page was created and loaded using various webpack tools, and styled
        with CSS modules.
      </p>
    </Layout>
  );
};

export default DynamicPage;
