import React, { useState } from 'react'
 
 const widthCounter = (Counter) => {
    function newComponent() {
        const [count, setCount] = useState(0);
       
        function handleIncrement(){
            setCount(count + 1);
        }

        function handleDecrement(){
            setCount(count - 1);
        }
    
  return (
    <Counter
    count = {count}
    handleIncrement = {handleIncrement}
    handleDecrement = {handleDecrement}
    />
  );
}
return newComponent;
};
export default widthCounter;
