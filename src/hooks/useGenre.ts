import { useState, useEffect, ReactNode } from "react";
import apiClient from "../services/api-client";

interface Genre {
  genre: string | ReactNode;
}

interface FetchResponse {
  count: number;
  results: Genre[]; // Assuming the response has an array of Genre
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClient
      .get<FetchResponse>(
        "https://moviesdatabase.p.rapidapi.com/titles/utils/genres",
        {
          signal: controller.signal,
        }
      )
      .then((res) => {
        if (!controller.signal.aborted) {
          setGenres(res.data.results);

          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (!controller.signal.aborted) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
