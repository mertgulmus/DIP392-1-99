// Play.js
import React, { PureComponent } from "react";
import { GameSession } from "../../util/GameSession";
import Board from '../../components/Board/Board';
import './Play.style.scss';

export class Play extends PureComponent {
    constructor(props) {
        super(props);
        this.gameSession = new GameSession();
        this.state = {
            board: this.gameSession.board,
            currentPlayer: this.gameSession.currentPlayer,
            winner: this.gameSession.winner,
            isDraw: this.gameSession.isDraw
        };
    }

    componentDidMount() {
        this.gameSession.startGame();
    }

    handleDrop = (colIndex) => {
        if (this.gameSession.makeMove(colIndex)) {
            this.setState({
                board: this.gameSession.board,
                currentPlayer: this.gameSession.currentPlayer,
                winner: this.gameSession.winner,
                isDraw: this.gameSession.isDraw
            });
        }
    }

    handleResetConfirmation = () => {
        if (window.confirm("Are you sure you want to reset the game?")) {
            this.gameSession.resetGame();
            this.setState({
                board: this.gameSession.board,
                currentPlayer: this.gameSession.currentPlayer,
                winner: this.gameSession.winner,
                isDraw: this.gameSession.isDraw
            });
        }
    }

    render() {
        const { board, winner, isDraw, currentPlayer } = this.state;
        return (
            <div className="Play">
                <h1>Game board</h1>
                <button onClick={ this.handleResetConfirmation }>Reset</button>

                { !winner && !isDraw && <span>Current player: { currentPlayer }</span> }
                { winner && <span>{ winner } wins!</span>}
                { !winner && isDraw && <span>It's a draw!</span>}
                <div className="BoardWrapper">
                    <Board board={ board } onDrop={ this.handleDrop } />
                </div>
            </div>
        );
    }
}

export default Play;
