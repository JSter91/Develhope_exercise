import "./App.css";
import GitHubUser from "./GitHubUser";

function App() {
  const username = "michael";

  return (
    <>
      <GitHubUser username={username}></GitHubUser>
    </>
  );
}

export default App;
