import { Player } from "../src/util/Player";

describe('Player class', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('Player initialization', () => {
        localStorage.setItem('username', 'test');
        const player = new Player();
        expect(player.playerID).toBe('test');
        expect(player.displayName).toBe(null); // Since no display name set initially
    });

    test('Getting game history', () => {
        localStorage.setItem('username', 'test');
        localStorage.setItem('sessionHistory', JSON.stringify([
            { sessionID: 1, playerID: 'test', gameResult: 'win' },
            { sessionID: 2, playerID: 'other', gameResult: 'lose' }
        ]));
        const player = new Player();
        expect(player.gameHistory).toEqual([{ sessionID: 1, playerID: 'test', gameResult: 'win' }]);
    });

    test('Changing display name', () => {
        localStorage.setItem('username', 'test');
        const player = new Player();
        player.changeDisplayName('NewName');
        expect(player.displayName).toBe('NewName');
    });

    test('Retrieving display name', () => {
        localStorage.setItem('username', 'test');
        localStorage.setItem('test', 'DisplayName');
        const player = new Player();
        expect(player.retrieveDisplayName()).toBe('DisplayName');
    });

    test('Saving player profile', () => {
        localStorage.setItem('username', 'test');
        const player = new Player();
        player.changeDisplayName('NewName');
        player.savePlayerProfile();
        expect(localStorage.getItem('test')).toBe('NewName');
    });

    test('Checking if player is logged in', () => {
        localStorage.setItem('username', 'test');
        const player = new Player();
        expect(player.isLogged()).toBe(true);
    });
});