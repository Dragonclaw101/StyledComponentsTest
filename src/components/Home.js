import React from "react";
import { Link } from "react-router-dom";

import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <p>
        Welcome to my CSS Modules and Styled Components bundle! I show my
        uderstandig here (with a few workarounds, as recent updates to
        css-loader makes Camel Case irrelivent.)
      </p>
      <p>
        <Link to="/dynamic">Go to the asynchronous page! </Link>
        <br></br>
        <br></br>
        <Link to="/components">Head to Styled Components Example</Link>
      </p>
    </Layout>
  );
};

export default Home;
