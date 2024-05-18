const Cell = ({ value, onClick }) => {
  return (
    <div className="Cell" onClick={onClick}>
      {value && <div className={`Disc ${value}`}></div>}
    </div>
  );
};

export default Cell;
