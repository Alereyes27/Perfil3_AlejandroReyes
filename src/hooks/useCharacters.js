import { useCallback, useEffect, useState } from "react";

const API_URL = "https://rickandmortyapi.com/api/character";

export function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCharacters = useCallback(async (signal) => {
    try {
      const response = await fetch(API_URL, { signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      setCharacters(Array.isArray(data.results) ? data.results : []);
    } catch (requestError) {
      if (requestError.name !== "AbortError") {
        setError("No fue posible conectar con la API. Revisa tu conexión e inténtalo de nuevo.");
      }
    } finally {
      if (!signal?.aborted) setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const runLoad = async () => {
      await loadCharacters(controller.signal);
    };

    void runLoad();
    return () => controller.abort();
  }, [loadCharacters]);

  return {
    characters,
    loading,
    error,
    refresh: () => {
      setLoading(true);
      setError("");
      return loadCharacters();
    },
  };
}
