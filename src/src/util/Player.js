export class Player {
    constructor() {
        this.playerID = localStorage.getItem('username');
        this.gameHistory = this.getGameHistory();
        this.displayName = this.retrieveDisplayName();
    }

    getGameHistory() {
        const gameHistory = JSON.parse(localStorage.getItem('sessionHistory')) || [];

        this.gameHistory = gameHistory.filter(game => game.playerID === this.playerID);

        return this.gameHistory;
    }

    changeDisplayName(newName) {
        this.displayName = newName;
    }

    retrieveDisplayName() {
        return localStorage.getItem([this.playerID]);
    }

    savePlayerProfile() {
        localStorage.setItem([this.playerID], this.displayName);
    }

    isLogged() {
        return this.playerID !== null;
    }
}
