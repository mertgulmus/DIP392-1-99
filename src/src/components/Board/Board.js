import Cell from '../Cell/Cell';

const Board = ({ board, onDrop }) => {
    return (
        <div className="Board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="Row">
                    { row.map((cell, colIndex) => (
                        <Cell key={ colIndex } value={ cell } onClick={() => onDrop(colIndex)} />
                    )) }
                </div>
            ))}
        </div>
    );
};

export default Board;
