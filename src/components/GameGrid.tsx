import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { movies, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <p>{movie.titleText.text}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
