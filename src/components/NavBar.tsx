import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";


const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px" boxShadow="lg" p="6">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput/>
      <Text>Theme</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
