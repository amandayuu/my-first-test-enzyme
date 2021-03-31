import React, {useState} from 'react';
import MyComponent from "../MyComponent/MyComponent";

const Contador = () => {

    const [ counter, setCounter ] = useState(0);

    return(
        <>
            <div className="contador">
                <p className="counter">{counter}</p>

                <button 
                    id="incrementBtn" 
                    onClick={() => {setCounter(counter + 1) }}
                >
                    Increment
                </button>                
                <button 
                    id="decrementBtn"
                    onClick={() => {setCounter(counter - 1)}}
                >
                    Decrement
                </button>
            </div>
            <MyComponent />
        </>
    )
}

export default Contador;