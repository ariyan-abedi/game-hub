import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import genres from '../data/genres';
interface Props {
  onSelectGenre: (genre: Genre) => void;
  SelectedGenre: Genre | null;
}
const GenreList = ({ SelectedGenre, onSelectGenre }: Props) => {
  const { data, isloading, error } = useGenres();
  if (error) return null;
  if (isloading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="35px"
                borderRadius={8}
                src={genre.image_background}
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  genre.id === SelectedGenre?.id ? 'bold ' : 'normal'
                }
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                _hover={{ text: 'rgb(249, 251, 253)' }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
