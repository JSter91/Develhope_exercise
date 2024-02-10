import React from "react";
import GitHubUser from "./GitHubUser";
import { useParams } from "react-router-dom"


export default function ShowGithubUser() {

  const {username} = useParams()

  return (
    <>
      <GitHubUser username={ username }>utente</GitHubUser>
    </>
  );
}
