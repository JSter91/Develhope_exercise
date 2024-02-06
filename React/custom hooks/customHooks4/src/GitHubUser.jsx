import React, { useEffect } from "react";
import useGitHubUser from "./useGitHubUser";

function GitHubUser({ username }) {
  const { user, loading, error, fetchData } = useGitHubUser();

  useEffect(() => {
    if (username) {
      fetchData(username);
    }
  }, [username]);

  return (
    <>
      {loading && <p>Caricamento...</p>}
      {error && <p>Si è verificato un errore: {error}</p>}
      {user && (
        <div className="card-user">
          <h3>{user.name}</h3>
          <p>{user.login}</p>
          <div>
            <img className="avatar" src={user.avatar_url} alt="avatar" />
          </div>
        </div>
      )}
    </>
  );
}

export default GitHubUser;
