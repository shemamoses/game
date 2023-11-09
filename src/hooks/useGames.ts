import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Movie {
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
}

interface FetchResponse {
  count: number;
  results: Movie[];
}

const useGames = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponse>("https://moviesdatabase.p.rapidapi.com/titles", {
        signal: controller.signal,
      })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        setError(err.message);

        return controller.abort();
      });
  }, []);

  return { movies, error };
};

export default useGames;
