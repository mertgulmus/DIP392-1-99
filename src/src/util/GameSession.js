import { Player } from './Player';
import { SessionHistory } from './SessionHistory';

export class GameSession {
    constructor(rows = 6, cols = 7) {
        this.gameID = Math.random().toString(36).substr(2, 9);
        this.rows = rows;
        this.cols = cols;
        this.board = Array(rows).fill().map(() => Array(cols).fill(null));
        this.currentPlayer = 'red';
        this.winner = null;
        this.isDraw = false;
        this.moves = [];
        this.status = 'pending';
        this.startTime = null;
    }

    startGame() {
        this.status = 'started';
        this.startTime = Date.now();
    }

    alternateTurn() {
        this.currentPlayer = this.currentPlayer === 'red' ? 'yellow' : 'red';
    }

    checkWinner() {
        const directions = [
            { x: 0, y: 1 }, // Vertical
            { x: 1, y: 0 }, // Horizontal
            { x: 1, y: 1 }, // Diagonal \
            { x: 1, y: -1 } // Diagonal /
        ];

        const checkDirection = (row, col, direction) => {
            const player = this.board[row][col];
            if (!player) return null;

            for (let i = 1; i < 4; i++) {
                const newRow = row + i * direction.y;
                const newCol = col + i * direction.x;
                if (
                    newRow < 0 || newRow >= this.board.length ||
                    newCol < 0 || newCol >= this.board[0].length ||
                    this.board[newRow][newCol] !== player
                ) {
                    return null;
                }
            }
            return player;
        };

        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                for (const direction of directions) {
                    const winner = checkDirection(row, col, direction);
                    if (winner) {
                        this.winner = winner;
                        return winner;
                    }
                }
            }
        }
        return null;
    }

    checkDraw() {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === null) {
                    return false;
                }
            }
        }
        this.isDraw = true;
        return true;
    }

    makeMove(colIndex) {
        if (this.winner || this.isDraw) return false;

        for (let rowIndex = this.rows - 1; rowIndex >= 0; rowIndex--) {
            if (!this.board[rowIndex][colIndex]) {
                this.board[rowIndex][colIndex] = this.currentPlayer;
                const winner = this.checkWinner();
                const isDraw = !winner && this.checkDraw();
                if (winner) {
                    this.declareWinner();
                } else if (isDraw) {
                    this.declareDraw();
                } else {
                    this.alternateTurn();
                }
                return true;
            }
        }
        return false;
    }

    declareWinner() {
        this.status = 'ended';
        this.duration = Date.now() - this.startTime;
        this.saveSession('win');
    }

    declareDraw() {
        this.status = 'ended';
        this.duration = Date.now() - this.startTime;
        this.saveSession('draw');
    }

    saveSession(result) {
        const player = new Player();
        if (!player.isLogged()) return;

        new SessionHistory(
            this.gameID,
            player.playerID,
            result === 'win' ? `${ this.currentPlayer } won` : 'draw'
        );
    }

    resetGame() {
        this.board = Array(this.rows).fill().map(() => Array(this.cols).fill(null));
        this.currentPlayer = 'red';
        this.winner = null;
        this.isDraw = false;
        this.status = 'pending';
        this.startTime = null;
    }
}
