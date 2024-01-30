import React, { useEffect, useState, useRef } from "react";

export function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);

  useEffect(() => {
    const previousDirection = directionRef.current;

    if (counter > initialValue) {
      directionRef.current = "up";
    } else if (counter < initialValue) {
      directionRef.current = "down";
    } else {
      directionRef.current = null;
    }

    if (directionRef.current !== previousDirection) {
      console.log("Direction:", directionRef.current);
    }
  }, [counter]);

  function handleIncrement() {
    setCounter((c) => c + 1);
  }

  function handleDecrement() {
    setCounter((c) => c - 1);
  }

  return (
    <>
      <h2>My count to: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default Counter;
