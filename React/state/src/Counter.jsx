import { useState } from "react"

function Counter (){
    const [count, setCount] = useState(0)

    function handleCounterIncrement(){
        setCount(count + 1)
    }

    return(
        <>
        <h2>{count}</h2>
        <button onClick={handleCounterIncrement}>premi</button>
        </>
    )
}

export default Counter

/* 
When calling "setter" function to increment the counter, 
should the parameter be a function or an immediate value? Why?
 

In most cases, for simple state increments like in your counter example, 
either approach works. However, when dealing with more complex state updates or 
when the new state depends on the previous state, using a function is recommended
 to ensure correctness and avoid potential issues.
  */