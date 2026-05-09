import { useState } from "react";



function App() {
 
const [count, setCount] = useState(5);

let increase = () => {
    if (count < 20) {
      setCount(count + 1);
    }

  }

  
let decrease = () => {
  if(count > 0){
    setCount(count - 1)
  }
  
}


  return (
    <>
    
    <h1>{count}</h1>

      <button onClick={increase}>
        Increase
      </button>
      <button onClick={decrease}>
          Decrease
      </button>
    </>    
  )
}

export default App
