import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //useState
  //state - is data that changes with time, accross renders in react
  //first value in the array is the state variable, and the second value is the function to update the state
  const [count, setCount] = useState(0);

  //useEffect
  //it is used to perform side effects: (things happening as a result of e.g. state change)
  //runs at least once when a component is loaded
  //default syntax: useEffect(() => {}, []); takes in a function & an array of dependencies
  useEffect(() => {
      console.log("Count is: ", count); //the code to be ran (fuction parameter)

      return () => { //optional return function
        console.log("Clean up!");
      };

    }, [count] //the dependancy array (run the above function on this condition)
  );

  return (
    <>
      <h1>React Hooks</h1>
      <div className="card">
        <h2>Count is:  {count}</h2>
        <button className="button" onClick={() => setCount(count + 1)}> Increment </button>
        <button className="button" onClick={() => setCount(count - 1)}> Decrement </button>
      </div>
    </>
  )
}

export default App
