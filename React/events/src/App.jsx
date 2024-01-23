import "./App.css";
import AlertClock from "./AlertClock";

function App() {
  function handleButtonClick() {
    const now = new Date();
    alert(`the current time is: ${now.toLocaleTimeString()}`);
  }

  return (
    <>
      <AlertClock handleButtonClick={handleButtonClick} />
    </>
  );
}

export default App;
