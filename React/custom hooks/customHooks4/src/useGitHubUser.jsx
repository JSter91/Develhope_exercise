import { useState, useEffect } from 'react';

function useGitHubUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const fetchData = async (username) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (res.ok) {
        const userGit = await res.json();
        setUser(userGit);
      } else {
        setError(`Errore ${res.status}: ${res.statusText}`);
      }
    } catch (error) {
      setError('Si è verificato un errore durante il recupero dei dati');
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    fetchData,
  };
}

export default useGitHubUser;
