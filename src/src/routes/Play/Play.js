import { PureComponent } from "react";
import Board from '../../components/Board/Board';
import './Play.style.scss';

export class Play extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            rows: 6,
            cols: 7,
            board: Array(6).fill(Array(7).fill(null)),
            currentPlayer: 'red',
            winner: null,
            isDraw: false
        };
    }

    checkWinner(board) {
        const directions = [
            { x: 0, y: 1 }, // Vertical
            { x: 1, y: 0 }, // Horizontal
            { x: 1, y: 1 }, // Diagonal \
            { x: 1, y: -1 } // Diagonal /
        ];

        const checkDirection = (row, col, direction) => {
            const player = board[row][col];
            if (!player) return null;

            for (let i = 1; i < 4; i++) {
                const newRow = row + i * direction.y;
                const newCol = col + i * direction.x;
                if (
                    newRow < 0 || newRow >= board.length ||
                    newCol < 0 || newCol >= board[0].length ||
                    board[newRow][newCol] !== player
                ) {
                    return null;
                }
            }
            return player;
        };

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                for (const direction of directions) {
                    const winner = checkDirection(row, col, direction);
                    if (winner) {
                        return winner;
                    }
                }
            }
        }
        return null;
    }

    checkDraw(board) {
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                if (board[row][col] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    handleDrop = (colIndex) => {
        const { rows, board, currentPlayer, winner } = this.state;
        if (winner) return;

        const newBoard = board.map(row => row.slice());
        for (let rowIndex = rows - 1; rowIndex >= 0; rowIndex--) {
            if (!newBoard[rowIndex][colIndex]) {
                newBoard[rowIndex][colIndex] = currentPlayer;
                const gameWinner = this.checkWinner(newBoard);
                const isDraw = !gameWinner && this.checkDraw(newBoard);
                this.setState({
                    board: newBoard,
                    currentPlayer: currentPlayer === 'red' ? 'yellow' : 'red',
                    winner: gameWinner,
                    isDraw: isDraw
                });
                return;
            }
        }
    }

    handleResetConfirmation = () => {
        if (window.confirm("Are you sure you want to reset the game?")) {
            this.setState({
                board: Array(6).fill(Array(7).fill(null)),
                winner: null,
                isDraw: false
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
