import { Card, CardBody, SkeletonText } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card
      width="200px"
      paddingX="4px"
      paddingY="20px"
      margin="2"
      mx="auto" 
      borderRadius={10}
      overflow="hidden"
      maxW="300px"
      position="relative"
    >
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
