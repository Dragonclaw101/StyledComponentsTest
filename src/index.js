import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 200px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;

  background-color: ${props => props.bg === "black" ? "black" : "blue"};
`

function Profile() {
  return(
    <div>
      <StyledButton bg="black" type="button">Button A</StyledButton>
      <StyledButton bg="blue" type="submiy" onClick={() => alert("clicked")}>Button A</StyledButton>
    </div>
  )
}

ReactDOM.render(<Profile />, document.getElementById('root'));