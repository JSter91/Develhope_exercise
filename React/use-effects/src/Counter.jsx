import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>premi</button>
    </>
  );
}

export default Counter;
