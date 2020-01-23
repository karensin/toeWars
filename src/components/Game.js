import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Board from './Board.js';
import Intro from './Intro.js';
import Button from 'react-bootstrap/Button';

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true
        };
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !this.state.xIsNext,
        });
    }

    handleBoardRestart = () => {
        this.setState({
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true
        })
    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
            status = winner + " is our winner !";
        } else if (history.length === 10) {
            status = "No winner"
        }
        else {
            status = " Next player : " + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div >
                <div className="yellowGlow status pr-4" >{status}
                </div>
                <main className="game-board">

                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        onClick2={() => this.handleBoardRestart()}
                    />

                </main>

                <div className="game-info">

                </div>

            </div>
        );
    }
}


export default Game;