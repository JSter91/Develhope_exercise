import React from "react";
import GitHubUser from "./GitHubUser";


export default function ShowGithubUser({username}) {

  return (
    <>
      <GitHubUser username={ username }>utente</GitHubUser>
    </>
  );
}
