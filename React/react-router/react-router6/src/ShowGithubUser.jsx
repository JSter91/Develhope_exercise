import React from "react";
import GitHubUser from "./GitHubUser";
import { Link, useParams } from "react-router-dom";

export default function ShowGithubUser() {
  const { username } = useParams();

  return (
    <>
      <div>

        <GitHubUser username={username}>
        <Link to="/users">Back</Link>

        </GitHubUser>
      </div>
    </>
  );
}
