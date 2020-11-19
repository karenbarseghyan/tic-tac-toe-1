import React from "react";
import styled from "styled-components";


function Square({...props}) {

  const SquareWrapper = styled.div`
    flex-direction: row;
    background-color: ${props.color ? props.color : "#c39ea0"};
    color: black;
    flex: 1 1 auto;
    display: block;
    margin: 5px;
    width: 100%;
    font-size: 14vh;
    text-align: center;
    cursor: default;
  `;

  return (
    <SquareWrapper>

    </SquareWrapper>
  );
}

export default Square;