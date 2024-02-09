import { Route, Routes, Link, useParams } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  let {username= "JSter91"} = useParams()

  return (
    <>

      <div className="link">
        <Link to="/">home</Link>
        <Link to="/Counter">Counter</Link>
        <Link to={`/users/:${username}`}>User</Link>
      </div>

      <div className="routes">
        <Routes>
          <Route path="/" element={<Welcome user={username} />}></Route>
          <Route path="/Counter" element={<Counter />}></Route>
          <Route path={`/users/:${username}`} element={<ShowGithubUser />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
