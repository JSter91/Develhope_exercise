import { Route, Routes, Link, useParams } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import NotFound from "./NotFound";
import GithubUserList from "./GithubUserList";
import GitHubUser from "./GitHubUser";

function App() {
  return (
    <>
      <div className="link">
        <Link to="/">home</Link>
        <Link to="/Counter">Counter</Link>
        <Link to="/users"> list </Link>
      </div>

      <div className="routes">
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/Counter" element={<Counter />}></Route>
          <Route path="/users" element={<GithubUserList />}>
            <Route index element={<p>Add a user and select it</p>} ></Route>
            <Route path=":username" element={<ShowGithubUser />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
