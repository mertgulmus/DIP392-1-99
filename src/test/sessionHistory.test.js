import { SessionHistory } from "../src/util/SessionHistory";

describe('SessionHistory class', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('Creating and saving session history', () => {
        const sessionID = 1;
        const playerID = 'test';
        const gameResult = 'win';

        const sessionHistory = new SessionHistory(sessionID, playerID, gameResult);

        // Retrieve session history from localStorage
        const savedSession = JSON.parse(localStorage.getItem('sessionHistory'))[0];

        // Expectations
        expect(savedSession.sessionID).toBe(sessionID);
        expect(savedSession.playerID).toBe(playerID);
        expect(savedSession.gameResult).toBe(gameResult);
        expect(new Date(savedSession.date)).toEqual(sessionHistory.date);
    });
});
