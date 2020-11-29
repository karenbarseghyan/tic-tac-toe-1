import React from "react";
import styled from "styled-components";

const SquareWrapper = styled.div`
  flex-direction: row;
  background-color: #c39ea0;
  color: black;
  flex: 1 1 auto;
  display: block;
  margin: 5px;
  width: 100%;
  font-size: 14vh;
  text-align: center;
  cursor: default;
`;

function Square({char, clickHandler, i, j,...props}) { 

  return (
    <SquareWrapper onClick = {() => {!char && clickHandler (i, j)} }>
      <div>
        {char}
      </div>

    </SquareWrapper>
  );
}

export default Square;