import './Homepage.style.scss';

function Homepage() {
  return (
    <div className="Homepage">
        <h1>Homepage</h1>
        <p>Welcome to the homepage!</p>
        <div className="Homepage__content">
            <p>Click on the links above to navigate to different pages.</p>
            <b>Game rules</b>
            <p>Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping colored discs from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. Connect Four is a solved game. The first player can always win by playing the right moves.</p>
        </div>
    </div>
  );
}

export default Homepage;
