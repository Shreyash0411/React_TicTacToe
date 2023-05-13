import Square from "./Square";

// eslint-disable-next-line react/prop-types
const Board = ({squares, handleSquareClicks})=>
{

    const render = position =>{
        return (
           <Square 
        value={squares[position]} 
        onClick = {()=> handleSquareClicks(position)}
        />
        );
    };

    return (
    <div className="board">
    <div className="board-row">
        {render(0)}
        {render(1)}
        {render(2)}
    </div>
    <div className="board-row">
        {render(3)}
        {render(4)}
        {render(5)}
    </div>
    <div className="board-row">
        {render(6)}
        {render(7)}
        {render(8)}
    </div>    
    </div>
    );
}

export default Board;
