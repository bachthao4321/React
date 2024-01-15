import React, {useReducer, useState} from "react";
import Board from "./Board";
import './GameStyle.css';
import { calculateWinner } from "../../helper";

const initialState = {
    board : Array(9).fill(null),
    xIsNext: true
} 
//immutable (ko thể chỉnh sửa)
const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK': {
            const {board,xIsNext} = state;
            const {index, winner} = action.payload;
            if (winner || board[index]) return state;
            const nextState = JSON.parse(JSON.stringify(state))
            nextState.board[index] = xIsNext ? 'X' : 'O';
            nextState.xIsNext = !xIsNext
            return nextState
        }
        case 'RESET': {
            const nextState = JSON.parse(JSON.stringify(state))
            nextState.board = Array(9).fill(null)
            nextState.xIsNext = true
            return nextState
        }
        default:
            
            break;
    }
    return state
}

function Game() {
    const [state,dispatch] = useReducer(gameReducer, initialState);
    // const [state,setState] = useState({
    //     board : Array(9).fill(null),
    //     xIsNext : true,
    //     name : 'evendo'
    // });   
    const winner = calculateWinner(state.board);
    const handleClick = (index) => {
        const boardCopy =[...state.board];      
        if (winner) return ;
        dispatch({
            type: 'CLICK',
            payload : {
                index,
                winner
            }
            
        })
        // boardCopy[index] = state.xIsNext ? 'X' : 'O' 
    //     console.log(boardCopy[index]) 
    //     setState({
    //         ...state,
    //         board : boardCopy,
    //         xIsNext : !state.xIsNext,
    //     })
    };
    // console.log(state)


    const handleResetGame = () => {
        dispatch({
            type : 'RESET',

        })
    }
    return (
        <>
    <Board cells={state.board} onClick ={handleClick}></Board>
    {winner ? <div className="game-winner">
        {winner ? `Winner is ${winner}!` : ''} </div>
    : ''}
    <button className="game-reset"onClick={handleResetGame}>Reset game</button>
    </>
    )   
}

export default Game;