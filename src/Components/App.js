import React, { useState } from "react";
import styled from "styled-components";
import GameBoard from "./GameBoard";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;
const ResetButton = styled.button`
  display:inline-block;
   padding:0.35em 1.2em;
   border:0.1em solid #FFFFFF;
   margin:0.3em;
   border-radius:0.12em;
   box-sizing: border-box;
   text-decoration:none;
   font-weight:600;
   color:#FFFFFF;
   text-align:center;
   transition: all 0.2s;
   background: #fa255e;
   cursor: pointer;
   font-size: 6vh;
   font-family: Roboto;
   
   :hover{
     color:#fa255e;
     background-color: black;
   }
   
   :active{
     color:#fa255e;
     background-color: black;
     padding: 0.35em;
   }
`;
function App() {

  const [count, setCount] = useState (0);

 
  return (
    <AppWrapper>
      <GameBoard gameCount = {count} />
      <ResetButton onClick = { () => {setCount(count + 1)}}>Reset</ResetButton>
    </AppWrapper>
  );
}

export default App;