import { useState } from "react";

function CounterDisplay({ count }) {
  return <h2>{count}</h2>;
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleCounterIncrement() {
    setCount((count) => count + 1);
  }

  function handleCounterDecrement() {
    setCount((count) => count - 1);
  }

  function handleCounterReset() {
    setCount(0);
  }

  return (
    <>
      <CounterDisplay count={count} />
      <button onClick={handleCounterIncrement}>Incrementa</button>
      <button onClick={handleCounterDecrement}>Decrementa</button>
      <button onClick={handleCounterReset}>Reset</button>
    </>
  );
}

export default Counter;
