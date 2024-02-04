import { useEffect, useState } from "react";
import "./App.css";
import GitHubUser from "./GitHubUser";

function App() {
  const username = "Michael";

  return <><GitHubUser username={username}></GitHubUser></>;
}

export default App;
