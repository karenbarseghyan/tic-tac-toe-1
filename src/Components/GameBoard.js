import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Square from "./Square";

const GameBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 60vh;
  min-height: 200px;
  min-width: 200px;
`;
const BoardRow = styled.div`
  flex: 1 1 auto; 
  display: flex;
  height: 100%;
  width: 100%;
`;
const HDependant = styled.div`
font-size: 6vh;
font-weight: 700;
padding: 10px;
`;
function GameBoard({gameCount, ...props}) {
  const [board, setBoard] = useState(
    [
      ["","",""],
      ["","",""],
      ["","",""]
    ]
  );

  const [turn, setTurn] = useState("X");
  useEffect(()=>{
    setBoard (
      [
       ["","",""],
       ["","",""],
       ["","",""]
      ]
    );
    setTurn("X");
  }, [gameCount])

  const clickHandler = (i,j) => {
    console.log(i,j);
    const shallowBoard = board.map (row => [...row]);
    shallowBoard[i][j] = turn;

   console.log(isGameWon(shallowBoard, i, j)) ;
    setTurn(turn === "X" ? "O" : "X");
    setBoard(shallowBoard);
    // const shallowBoard = [...board];
    // shallowBoard[i][j] = "X";
    // setBoard(shallowBoard);
  }

  const isGameWon = (shallowBoard, i, j) => {
    return (checkHorizontal(shallowBoard[i]) || checkVertical(shallowBoard, j));
  }

  const checkHorizontal = (row) => {
   for (let i = 0; i < row.length; i++) {
     if(row[i] !== turn) {
       return false;
     }
   }
   return true; 
  }

  const checkVertical = (shallowBoard, j) => {
    for (let i = 0; i < shallowBoard.length; i++) {
      if(shallowBoard[i][j] !== turn) {
        return false;
      }
    }
    return true;
  }

  const renderSquares = (row, i) => (
    row.map((square, ind) => (
      (<Square i ={i}
            j = {ind}
            key = {ind}
            char = {square}
            clickHandler = {clickHandler}
            />)
    ))
  );

  const renderRows = board.map ((row, ind ) => <BoardRow key = {ind}> {renderSquares(row, ind)} </BoardRow>)

  return (
    <>
      <HDependant>Player Turn : {turn}</HDependant>
      <GameBoardWrapper >
        {renderRows}
      </GameBoardWrapper>
    </>
  );
}

export default GameBoard; 