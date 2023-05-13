import './styles.scss'
import { useState } from 'react';
import Board from './Components/board'
import { calculateWinner } from './calculateWinner';

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(squares); 
  const nextPlayer = isXNext ? "X" : "O";
  const statusMessage = winner? `winner is ${winner}` :  `next player is ${nextPlayer}`;

  const handleSquareClicks = clickedPosition=>{
        if (squares[clickedPosition] || winner){
            return;
        }
    
        setSquares(currentSquares => {
            return currentSquares.map((squareValue,pos)=>{
                if (pos == clickedPosition){
                        return isXNext? 'X' : 'O';
                    }

                return squareValue;
            });
        });
        setIsXNext((currentIsNext) => !currentIsNext)
    };

  return(
   <div className='app'>
    <h1>{statusMessage}</h1>
  <Board squares={squares} handleSquareClicks = {handleSquareClicks}/>
  
  </div>
  )
}

export default App;
