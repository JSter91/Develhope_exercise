import { useState, useEffect } from "react";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGitHubUser({ username }) {
  const [user, setUser] = useState({});
  const { data, error } = useSWR(`https://api.github.com/users/${username}`,fetcher);

  useEffect(() => {
    setUser(data);
  }, [data]);

  return {
    user: user,
    error: error,
    isLoading: !data && !error,
  };
}

export default useGitHubUser;
