 
import { useState } from "react";

const Counter = () => {
   const [counter, setCounter] =  useState(0);
   const [isShow, setIsShow] = useState(true);

    const increaseHandler = () =>{
        //setCounter(counter + 1);
        setCounter (counter => counter + 1);
    };
    const increaseHandler3 = () => {
        setCounter(counter => counter + 1);
        setCounter(counter => counter + 1);
        setCounter(counter => counter + 1);
    }

    const stopHandler =() => {
        setCounter("-");
    };

    const showHandler = () => setIsShow(true);
    
    const hidehandler = () => setIsShow (false);
    


  return (
    <>
    <button onClick={showHandler}>show</button>
    <button onClick={hidehandler}>hide</button>
    
    { isShow ? (
            <div>
                <h1>Counter</h1>
                <p>{counter}</p>
                <button onClick={increaseHandler}>increase</button>
                <button onClick={increaseHandler3}>increase3</button>
                <button onClick={stopHandler}>stop</button>
                
                 </div>

        ) : null
    }
     
    </>
  );
}

export default Counter;