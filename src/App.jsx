import './styles.scss'
import { useState } from 'react';
import Board from './Components/board'
import StatusMessage from './StatusMessage';
import { calculateWinner } from './calculateWinner';

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(squares); 
  

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
    <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
  <Board squares={squares} handleSquareClicks = {handleSquareClicks}/>
  
  </div>
  )
}

export default App;
