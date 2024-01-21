import { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setCurrentTime(() => new Date()), 1000);
  });

  return <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>;
}

export default Clock;
