import { Box, Flex, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { movies, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <Flex
        gridColumn={{ sm: 1, md: 3, lg: 5 }}
        direction="row"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
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
