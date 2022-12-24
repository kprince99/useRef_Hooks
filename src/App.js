import React, {useRef, useState} from 'react';
import './App.css';

function App() {
  // for example 1
  const colorChange = useRef(null);

  const clickHandle = () => {
    colorChange.current.style.color = "#fff";
    colorChange.current.style.background = "#4caf50";
    colorChange.current.innerHTML = "Background color changed to green";
    // console.log(colorChange.current);
  }

  // for example 2
  const [stateCount, setState] = useState(0);
  const refCount = useRef(0);

  const onStateUpdateClick = () => {
    const newValue = stateCount + 1;
    setState(newValue);
    console.log(newValue);
  };

  const onRefUpdateClick = () => {
    const newValue = refCount.current + 1;
    refCount.current = newValue;
    console.log(newValue);
  };
  
  return (
    <div className="App">
    <h2>useRef Explanation</h2> 
    <hr />
    <h1>Example #1 : DOM Manupulation using useRef</h1>

    <p ref={colorChange}>When button is pressed the color get change</p>
    <button className='color_change' onClick={clickHandle}> Click Me</button>

    <h1>Example #2 Differentiate b/w <b>useState(renders when update)</b> and <b>useRef(doesnt cause re-render when update)</b></h1>
  
    <div>
        <p className = 'count1'>State count: {stateCount}</p>
        <p className = 'count2'>Ref count: {refCount.current}</p>
    </div>
    <p1>Note: This example is easily understandable in console.</p1>
    <br />
    <br />
     <div>
      <button className = "upd_state" onClick={onStateUpdateClick}>Update state</button>
      <button className = "upd_ref" onClick={onRefUpdateClick}>Update ref</button>
    </div>
 </div>
  );
}

export default App;
