import { useState } from 'react';

function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCurrentLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocalizzazione non supportata dal browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setLoading(false);
      },
      (error) => {
        setError(`Errore durante il recupero della posizione: ${error.message}`);
        setLoading(false);
      }
    );
  };

  return {
    location,
    loading,
    error,
    getCurrentLocation,
  };
}

export default useCurrentLocation;
