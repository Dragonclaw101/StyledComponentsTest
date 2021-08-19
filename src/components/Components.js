import React from "react";
// [MF]: My VSCode shows this Link import as not being used.
// This where ESLint helps in telling you what is not necessary in your codebase.
import styled from "styled-components";

import Layout from "./Layout";
import { componentsTest } from "./Layout.css";

const StyledButton = styled.button`
  min-width: 200px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  background: blue;
`;

const Content = styled.p`
  color: crimson;
  size: 20px
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: 10px;
  margin-left: auto;
`;

const Components = () => {
  return (
    <Layout>
      <StyledButton
        type="button"
        onClick={() =>
          alert("I was clicked! This is a Styled Components button!")
        }
      >
        My Styled Button
      </StyledButton>
      <Content>
        This is the Styled Components Content! This is a styled paragraph, as
        you shopuld be able to tell. I write the components as variables and put
        them in the React Router Layout, so they can be a part of the network
        (which also uses CSS Modules.)
      </Content>
      <div className={componentsTest}>
        <p>
          And this is a CSS Module inside of the Styled Components page! I can
          combine them as needed.
        </p>
      </div>
    </Layout>
  );
};

export default Components;
