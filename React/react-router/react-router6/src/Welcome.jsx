import { useParams } from "react-router-dom";
import "./App.css";

function Welcome() {
  const { username = "user" } = useParams();
  return (
    <>
    <div className="welcome">
    <h1>Welcome {username}</h1>
    </div>
    </>
  );
}

export default Welcome;
