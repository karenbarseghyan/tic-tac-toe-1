import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Square from "./Square";

const GameBoardWrapper = styled.div`
  position: relative;
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

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.3;
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
  const [won, setWon] = useState(false);

  useEffect(()=>{
    setBoard (
      [
       ["","",""],
       ["","",""],
       ["","",""]
      ]
    );
    setTurn("X");
    setWon(false);
  }, [gameCount]);

  const clickHandler = (i,j) => {
    console.log(i,j);
    const shallowBoard = board.map (row => [...row]);
    shallowBoard[i][j] = turn;

    setBoard(shallowBoard);
    isGameWon(shallowBoard, i, j) ? setWon(true) : setTurn(turn === "X" ? "O" : "X");
    
    // const shallowBoard = [...board];
    // shallowBoard[i][j] = "X";
    // setBoard(shallowBoard);
  };

  const isGameWon = (shallowBoard, i, j) => {
    return (
      checkHorizontal(shallowBoard[i]) || 
      checkVertical(shallowBoard, j) ||
      checkTopLeftToRight(shallowBoard) ||
      checkBotLeftToRight(shallowBoard)
      );
  }

  const checkHorizontal = (row) => {
   for (let i = 0; i < row.length; i++) {
     if(row[i] !== turn) {
       return false;
     }
   }
   return true; 
  };

  const checkVertical = (shallowBoard, j) => {
    for (let i = 0; i < shallowBoard.length; i++) {
      if(shallowBoard[i][j] !== turn) {
        return false;
      }
    }
    return true;
  };

  const checkTopLeftToRight  = (shallowBoard) => {
    for (let i = 0; i < shallowBoard.length; i++) {
      if(shallowBoard[i][i] !== turn) {
        return false;
      }
    }
    return true;
  };
  
  const checkBotLeftToRight  = (shallowBoard) => {
    for (let i = shallowBoard.length - 1; i >= 0; i--) {
      if(shallowBoard[i][shallowBoard.length - i - 1] !== turn) {
        return false;
      }
    }
    return true;
  };

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
      {
        won ? 
        <HDependant  style = {{backgroundColor: 'red', width: '50%', textAlign: 'center'}}>
          Congratulations Player "{turn}" Wins
        </HDependant>
        :
        <HDependant>Player Turn : {turn}</HDependant>
      }
      
      <GameBoardWrapper >
        {won && <Overlay />}
        {renderRows}
      </GameBoardWrapper>
    </>
  );
}

export default GameBoard; 