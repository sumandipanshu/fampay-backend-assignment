import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Input } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const NavBar = () => {
  return (
    <Box
      bg={"gray.200"}
      _dark={{
        bg: "gray.700",
        color: "white",
      }}
      w={"100%"}
    >
      <Flex h={20} alignItems="center" justifyContent="center">
        <Input bg={"gray.150"} placeholder="Search" maxW={"40vw"} />
        <IconButton
          bg="gray.400"
          aria-label="Search database"
          icon={<SearchIcon />}
        />
      </Flex>
      <DarkModeSwitch />
    </Box>
  );
};
