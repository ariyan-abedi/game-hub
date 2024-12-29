import React from 'react';
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import { game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
//import getCroppedImageUrl from '../services/image-url';
interface Props {
  game: game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;