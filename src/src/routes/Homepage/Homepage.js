import { Player } from '../../util/Player';
import './Homepage.style.scss';

const Homepage = () => {
    const handleDisplayName = (event, player) => {
        event.preventDefault();
        const displayName = document.getElementById('displayName').value;
        player.changeDisplayName(displayName);
        player.savePlayerProfile();
        window.location.reload();
    };

    const renderLogin = () => {
        if (localStorage.getItem('username')) {
            const player = new Player();
            const displayName = player.displayName;

            if (displayName !== null) {
                return (
                    <div className="login">
                        <p>Hi { displayName }!</p>
                        <p>If you want to change your display name, please use below:</p>
                        <form>
                            <label htmlFor="displayName">Display Name:</label>
                            <input type="text" id="displayName" name="displayName" required />
                            <button type="submit" onClick={ (e) => handleDisplayName(e, player) }>Set Display Name</button>
                        </form>
                    </div>
                );
            }

            return (
                <div className="login">
                    <p>Hi { localStorage.getItem('username') }!</p>
                    <p>Looks like you haven't set a display name yet. Please set a display name to continue.</p>
                    <form>
                        <label htmlFor="displayName">Display Name:</label>
                        <input type="text" id="displayName" name="displayName" required />
                        <button type="submit" onClick={ (e) => handleDisplayName(e, player) }>Set Display Name</button>
                    </form>
                </div>
            );
        }

        return (
            <div className="login">
                <h2>Login</h2>
                <p>Looks like you're not logged in. If you want to save your game history, please log in with a username.</p>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                    <button type="submit" onClick={ handleLogin }>Login</button>
                </form>
            </div>
        );
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        localStorage.setItem('username', username);
        window.location.reload();
    };

    return (
        <div className="Homepage">
            <h1>Homepage</h1>
            { renderLogin() }
            <div className="Homepage__content">
                <h2>Game rules</h2>
                <p>Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping colored discs from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. Connect Four is a solved game. The first player can always win by playing the right moves.</p>
            </div>
        </div>
    );
}

export default Homepage;
