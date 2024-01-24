import "./App.css";
import Login from "./Login";

function App() {
  const handleLogin = (userData) => {
    console.log(userData);
  }

  return (
    <>
      <Login onLogin={handleLogin}></Login>
    </>
  );
}

export default App;
