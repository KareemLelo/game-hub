import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import ColorSwitch from "./Components/ColorSwitch";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PLatformSelector from "./Components/PLatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelecetedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelecetedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            onSelectGenre={setSelecetedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PLatformSelector
          onSelectPlatform={(platform) => setSelecetedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
