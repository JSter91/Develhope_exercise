import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleCounterIncrement() {
    setCount(count + 1);
  }

  return (
    <>
      <button className="btnCounter" onClick={handleCounterIncrement}>
        <h2>{count}</h2>
      </button>
    </>
  );
}

export default Counter;
