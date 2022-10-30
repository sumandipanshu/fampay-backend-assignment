import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Input } from "@chakra-ui/react";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const NavBar = ({ searchQuery, setSearchQuery }) => {
  const [query, setQuery] = useState(searchQuery);

  const updateSearchQuery = () => setSearchQuery(query);
  const handleChange = e => {
    setQuery(e.target?.value);
  };
  const delayedQuery = useCallback(debounce(updateSearchQuery, 500), [query]);
  useEffect(() => {
    delayedQuery();
    // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel;
  }, [query, delayedQuery]);
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
        <Input
          bg={"gray.150"}
          placeholder="Search"
          maxW={"40vw"}
          value={query}
          onChange={handleChange}
        />
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
