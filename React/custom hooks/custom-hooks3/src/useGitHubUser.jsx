import { useState, useEffect } from 'react';

function useGitHubUser(name) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${name}`);
        console.log(res.status);
        const userGit = await res.json();
        setUser(userGit);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [name]);

  return user;
}

export default useGitHubUser;
