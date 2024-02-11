import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGitHubUser({ username }) {
  const { data, error, mutate } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher);

  function handleRefresh(){
    mutate()
  }


  return {
    user: data,
    error: error,
    isLoading: username && !data && !error,
    onRefresh: handleRefresh
  };
}

export default useGitHubUser;
