import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  //hooks
  //hooks always run after things are rendered

  //useState
  //state - is data that changes with time, accross renders in react
  //first value in the array is the state variable, and the second value is the function to update the state
  const [count, setCount] = useState(0);

  //useEffect
  //it is used to perform side effects: (things happening as a result of e.g. state change)
  //runs at least once when a component is loaded
  //default syntax: useEffect(() => {}, []); takes in a function & an array of dependencies
  /*useEffect(() => {
      console.log("Count is: ", count); //the code to be ran (fuction parameter)

      return () => { //optional return function
        console.log("Clean up!");
      };

    }, [count] //the dependancy array (run the above function on this condition)
  );*/

  //useRef
  //is similar to useState (hold & mutate values that are use in your component), but does not trigger a re-render of a component when the value changes
  //it is used for values that are not needed for rendering 
  //ref values are not used in the return statement
  //ref allows you read the updated value instantly witout waiting for a re-render
  //default syntax: const ref = useRef(initialValue);
  const countRef = useRef(count);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("state: ", count);
    console.log("ref: ", countRef.current);
  }

  return (
    <>
      <h1>React Hooks</h1>
      <div className="card">
        <h2>Count is:  {count}</h2>
        {/*<button className="button" onClick={() => setCount(count + 1)}> Increment </button>
        <button className="button" onClick={() => setCount(count - 1)}> Decrement </button>*/}
        <button className="button" onClick={handleIncrement}> Increment </button>
      </div>
    </>
  )
}

export default App
