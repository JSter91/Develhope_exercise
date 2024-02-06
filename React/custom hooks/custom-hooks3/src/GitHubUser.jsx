import React from "react";
import useGitHubUser from "./useGitHubUser";

function GitHubUser({ username }) {
  
  const user = useGitHubUser(username);

  return (
    <>
      {user ? (
        <div className="card-user">
          <h3>{user.name}</h3>
          <p>{user.login}</p>
          <div>
            <img className="avatar" src={user.avatar_url} alt="avatar" />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default GitHubUser;
