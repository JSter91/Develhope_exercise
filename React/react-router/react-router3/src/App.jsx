import { Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  const name = "User";

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name={name} />}></Route>
        <Route path="/Counter" element={<Counter />}></Route>
        <Route path="/users/:username" element={<ShowGithubUser/>}></Route>
      </Routes>
    </>
  );
}

export default App;
