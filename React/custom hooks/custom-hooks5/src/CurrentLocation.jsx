import React from "react";
import useCurrentLocation from "./useCurrentLocation";
import { useEffect } from "react";

function CurrentLocation() {
  const { location, loading, error, getCurrentLocation } = useCurrentLocation();

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {location && (
        <div>
          <p>Latitudine: {location.latitude}</p>
          <p>Longitudine: {location.longitude}</p>
        </div>
      )}
    </div>
  );
}

export default CurrentLocation;
