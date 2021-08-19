import React from "react";
// [MF]: My VSCode shows this Header import as not being used.
// This where ESLint helps in telling you what is not necessary in your codebase.
import { Icon } from "semantic-ui-react";

import Layout from "./Layout";

const NoMatch = () => {
  return (
    <Layout>
      <Icon name="minus circle" size="big" />
      <strong>Page not found!</strong>
    </Layout>
  );
};

export default NoMatch;
