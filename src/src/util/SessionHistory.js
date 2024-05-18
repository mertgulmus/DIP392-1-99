export class SessionHistory {
    constructor(sessionID, playerID, gameResult) {
        this.sessionID = sessionID;
        this.playerID = playerID;
        this.gameResult = gameResult;
        this.date = new Date();

        this.saveGameSession();
    }

    saveGameSession() {
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
