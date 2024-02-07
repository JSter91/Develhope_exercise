import React from "react";
import { useParams } from "react-router-dom";
import GitHubUser from "./GitHubUser";

export default function ShowGithubUser() {
    const { username } = useParams();

  return (
    <>
      <GitHubUser username={username}></GitHubUser>
    </>
  );
}
