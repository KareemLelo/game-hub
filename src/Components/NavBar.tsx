import { HStack, Image, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
