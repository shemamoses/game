import { Box, Flex, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { movies, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <Flex
        gridColumn={{ sm: 1, md: 3, lg: 5 }}
        direction="row"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {movies.map((movie) => (
          <Box
            key={movie._id}
            width="200px"
            paddingX="4px"
            paddingY="20px"
            margin="2"
            mx="auto"
            maxWidth="1200px"
          >
            <GameCard game={movie} />
            <Text as="b" noOfLines={1}>
              {movie.titleText.text}
            </Text>
            <Text color="gray">{movie.releaseYear.year}</Text>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default GameGrid;
