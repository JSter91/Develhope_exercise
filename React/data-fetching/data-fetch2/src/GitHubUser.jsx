import { useEffect, useState } from "react";

export function GitHubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(
    () => async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching GitHub user:", error);
      }
    },
    [username]
  );

  return (
    <div>
      {data && (
        <>
          <h2>{data.login}</h2>
          <h3>ID: {data.id}</h3>
          <img src={data.avatar_url} alt="" />
        </>
      )}
    </div>
  );
}
