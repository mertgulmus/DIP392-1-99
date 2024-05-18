import { GameSession } from "../src/util/GameSession";

beforeEach(() => {
    localStorage.clear();
});

const getSessionHistoryFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('sessionHistory')) || [];
};

test('GameSession saves to SessionHistory correctly', () => {
    localStorage.setItem('username', 'test');
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
    expect(savedSession.playerID).toBe('test');
    expect(savedSession.gameResult).toBe('red won');
}
);
describe('GameSession', () => {
    let game;
  
    beforeEach(() => {
      game = new GameSession();
    });
  
    test('should start a game', () => {
      game.startGame();
      expect(game.status).toBe('started');
      expect(game.startTime).not.toBeNull();
    });
  
    test('should alternate turns', () => {
      const initialPlayer = game.currentPlayer;
      game.alternateTurn();
      expect(game.currentPlayer).not.toBe(initialPlayer);
    });
  });
