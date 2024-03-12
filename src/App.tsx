import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/navBar";
import ColorSwitch from "./Components/ColorSwitch";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"grey"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"coral"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
