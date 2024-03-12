import { HStack, Image, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
