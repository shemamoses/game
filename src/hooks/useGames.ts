import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Movie {
  _id: string;
  titleText: {
    text: string;
    __typename: string;
  };
  primaryImage: {
    id: string;
    url: string;
    __typename: string;
  } | null;
  releaseYear: {
    year: number;
  };
}

interface FetchResponse {
  count: number;
  results: Movie[];
}

const useGames = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchResponse>("https://moviesdatabase.p.rapidapi.com/titles", {
        signal: controller.signal,
      })
      .then((res) => {
        {
          setMovies(res.data.results);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
    return controller.abort();
  }, []);

  return { movies, error, isLoading };
};

export default useGames;
