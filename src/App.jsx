
import { useState } from 'react';
import './styles.scss'
//import Board from './Components/board'

function App() {

  const [counter,setCounter] = useState(1);
  console.log("counter");
  let onBtnClick = ()=>{
    setCounter(currentCount =>{
      return currentCount +1;
    })
  }
    return(
        <div className='app'>
       <button onClick={onBtnClick}>click me here</button>
       <div>{counter}</div>
        </div>
    );
}

export default App;
