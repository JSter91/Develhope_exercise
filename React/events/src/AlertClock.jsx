function AlertClock({handleButtonClick}) {
   
  return (
    <div>
        <p>Click the button below to show the current time</p>
      <button onClick={handleButtonClick}>Click me!</button>
    </div>
  );
}

export default AlertClock;
