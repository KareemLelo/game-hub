import { HStack, Switch, useColorMode, Button, Text } from "@chakra-ui/react";
import React from "react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="purple"
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorSwitch;
