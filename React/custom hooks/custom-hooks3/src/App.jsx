import "./App.css";
import GitHubUser from "./GithubUser";

function App() {
  const username = "michael";

  return (
    <>
      <GitHubUser username={username}></GitHubUser>
    </>
  );
}

export default App;
