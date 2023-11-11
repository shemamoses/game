import { Movie } from "../hooks/useGames";
import { Badge, Card, Image } from "@chakra-ui/react";

interface Props {
  game: Movie;
  _id: string;
  titleText: {
    text: string;
  };
  primaryImage: {
    id: string;
    url: string;
  } | null;
  titleType: {
    text: string;
    id: string;
    isSeries: boolean;
    isEpisode: boolean;
  };
}
const defaultImageSrc =
  "https://m.media-amazon.com/images/M/MV5BNmM1NmY4N2QtNmVkOS00MjMyLWI5ZGUtYWYxMDRjY2MzNDdiXkEyXkFqcGdeQXVyMTAwMDAwMA@@._V1_.jpg";

const GameCard = ({ game }: Props) => {
  const imageUrl = game.primaryImage?.url || defaultImageSrc;
  return (
    <div>
      <Card
        borderRadius={10}
        overflow="hidden"
        maxW="300px"
        position="relative"
      >
        <Image src={imageUrl} boxSize="200px" objectFit="cover" />
        <Badge
          position="absolute"
          top="0"
          right="0"
          fontSize="sm"
          paddingX="2"
          paddingY="1"
          background="blue.500" // Example background color
          color="white" // Example text color
        >
          HD
        </Badge>
      </Card>
    </div>
  );
};

export default GameCard;
