import { GameSession } from "../src/util/GameSession";

beforeEach(() => {
    localStorage.clear();
});

const getSessionHistoryFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('sessionHistory')) || [];
};

test('GameSession saves to SessionHistory correctly', () => {
    const gameSession = new GameSession();
    gameSession.startGame();

    // Simulate some moves
    gameSession.makeMove(0);
    gameSession.makeMove(1);
    gameSession.makeMove(0);
    gameSession.makeMove(1);
    gameSession.makeMove(0);
    gameSession.makeMove(1);
    gameSession.makeMove(0); // Red wins

    const sessionHistory = getSessionHistoryFromLocalStorage();
    expect(sessionHistory.length).toBe(1);

    const savedSession = sessionHistory[0];
    expect(savedSession.sessionID).toBe(gameSession.gameID);
    expect(savedSession.playerID).toBe('red');
    expect(savedSession.gameResult).toBe('win');
});
