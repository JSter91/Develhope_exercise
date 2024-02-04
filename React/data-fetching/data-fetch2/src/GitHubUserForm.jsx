import React, { useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function GithubUserForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      setUsernames([...usernames, searchTerm]);
    }
    setSearchTerm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <br />

        <button type="submit">Search</button>
      </form>

      <ul>
        {usernames.map((user, index) => (
          <li key={index}>
            <GitHubUser username={user} />
          </li>
        ))}
      </ul>
    </div>
  )
}
