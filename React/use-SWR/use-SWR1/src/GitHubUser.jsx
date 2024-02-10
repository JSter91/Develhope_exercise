import React from "react";
import useGitHubUser from "./useGitHubUser";

function GitHubUser() {
  const { users, error, isLoading } = useGitHubUser();

  return (
    <>
      {isLoading && <h3>Loading...</h3>}

      {error && <h3> an as occurred</h3>}
      
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>{user.login}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default GitHubUser;
