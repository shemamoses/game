import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr", // Full width on small screens
          lg: "0.5fr 3fr", // One column for aside, three columns for main on large screens
        }}
      >
        <Show above="lg">
          <GridItem area="aside" background="#2B2D31">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>

        <GridItem area="nav" background="coral">
          <NavBar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
