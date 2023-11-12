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
          lg: "200px 1fr", // One column for aside, three columns for main on large screens
        }}
      >
        <Show above="lg">
          <GridItem
            area="aside"
            boxShadow="2px 0px 5px rgba(0, 0, 0, 0.1)"
            marginTop="7"
            borderRadius={14}
          >
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>

        <GridItem area="nav">
          <NavBar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
