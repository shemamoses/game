import { Button, HStack, List, ListItem, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { genres, isLoading } = useGenres();
  const [selectedGenre, setSelectedGenre] = useState(null);
  

  if (isLoading) return <Spinner />;

  return (
    <div>
      <List marginTop={4} maxHeight="100vh" overflowY="auto">
        {genres.map((genre, index) =>
          genre !== null ? (
            <ListItem key={index} padding="10px">
              <HStack>
                <Button
                  colorScheme={selectedGenre === genre ? "teal" : undefined}
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </Button>
              </HStack>
            </ListItem>
          ) : null
        )}
      </List>
    </div>
  );
};

export default GenreList;
