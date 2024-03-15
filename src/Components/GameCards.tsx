import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
} from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameCritic from "./GameCritic";
import getCroppedImageUrl from "../Services/image-URL";

interface Props {
  game: Games;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3} justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameCritic score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
