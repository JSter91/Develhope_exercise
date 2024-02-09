import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleCounterIncrement() {
    setCount(count + 1);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleCounterIncrement}>premi</button>
      <br />
      <br />
    </>
  );
}

export default Counter;
