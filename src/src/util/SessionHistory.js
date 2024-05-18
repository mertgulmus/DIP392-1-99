// SessionHistory.js
export class SessionHistory {
    constructor() {
        this.sessionID = null;
        this.playerID = null;
        this.gameResult = null;
        this.date = new Date();
    }

    saveGameSession() {
        // Save the session to the database or any storage
        // For simplicity, let's assume we're saving to local storage
        const sessionData = {
            sessionID: this.sessionID,
            playerID: this.playerID,
            gameResult: this.gameResult,
            date: this.date
        };
        const sessionHistory = JSON.parse(localStorage.getItem('sessionHistory')) || [];
        sessionHistory.push(sessionData);
        localStorage.setItem('sessionHistory', JSON.stringify(sessionHistory));
    }
}
