import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Square from './Square.js';
import Container from 'react-bootstrap/Container';
import Game from './Game.js';


class Board extends Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <Container className="filler " >

                <div className="glow " >
                    <div className="board-row ">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row"   >
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
                <button className="btn restart" onClick={() => this.props.onClick2()}>Restart Game</button>
            </Container>
        );
    }
}

export default Board;