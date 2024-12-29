import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelected from './components/PlatformSelected';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>(
    {} as GameQuery
  );
  return (
    <>
      <Grid
        templateAreas={[`"nav" "main"`, `"nav nav" "aside main"`]}
        templateColumns={{
          base: '1fr',
          lg: '250px',
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...GameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              SelectedGenre={GameQuery.genre}
              onSelectGenre={(genre) =>
                setGameQuery({ ...GameQuery, genre })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={GameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelected
                  selectedPlatform={GameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...GameQuery, platform })
                  }
                />
              </Box>
              <SortSelector
                sortOrder={GameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...GameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={GameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
