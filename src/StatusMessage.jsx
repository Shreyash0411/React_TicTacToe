const StatusMessage =({winner,isXNext,squares})=> {

    const noMovesLeft = squares.every((squareValue)=> squareValue !== null);

        const nextPlayer = isXNext ? "X" : "O";
        // const statusMessage = winner ? 
        // `winner is ${winner}` :  
        // `next player is ${nextPlayer}`;


        const resultRendering = () => {
            if(winner)
                return <div>winner is  
                    <span className={ isXNext === "X" ? "text-green": "text-orange" }>{' '}
                     {winner}
                     </span> 
                </div>;
            
            
            if(!winner && noMovesLeft)
                return <div> <span className="text-green">O</span> 
                and{' '} <span className="text-orange">X</span> are tied</div>

            if (!winner && !noMovesLeft){
                return <div>the next turn is of  <span className={ isXNext === "X" ? "text-green": "text-orange" }>{' '}
                {nextPlayer}
                </span> </div>
                
            }

            return null;
        }
        
    return <div className="status-message">
        {resultRendering()}
    </div> 
}

export default StatusMessage;