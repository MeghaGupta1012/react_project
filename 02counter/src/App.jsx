import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import vitelogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(15)

 //let counter = 15

 const addvalue = () =>{
 //counter = counter + 1
 // console.log("value added", Math.random());
 //console.log("Clicked", counter);
 if(counter<20)
 {
  setCounter(counter + 1)
 }
 }

  const removeValue =() =>
  {
    if(counter>0){
      setCounter(counter-1)
    }
    
  }
  
  return (
    <>
      <h1>Hello Everyone</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addvalue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}>
        Remove value{counter}</button>
    </>
  )
}

export default App
