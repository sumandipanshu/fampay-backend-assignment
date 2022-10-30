import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  Switch,
  useColorModeValue,
  Skeleton,
} from "@chakra-ui/react";
import { Card } from "./Card";

export const Main = ({ data, matchAllWords, setMatchAllWords, isLoading }) => {
  const handleChange = e => {
    setMatchAllWords(e.target.checked);
  };
  return (
    <Box w={"100%"} h={"fit-content"} py={5}>
      <Flex py={8} pr={80} align={"center"} justify="flex-end">
        <Text color={useColorModeValue("gray.900", "white")} mr={2}>
          Match all words?
        </Text>
        <Switch
          isChecked={matchAllWords}
          onChange={handleChange}
          color={useColorModeValue("gray.700", "white")}
          size="md"
        />
      </Flex>
      <Flex align={"center"} justify="center">
        <SimpleGrid columns={[1, 2, 3, 4]} gap={4}>
          {!isLoading &&
            data.items.map((item, index) => <Card key={index} {...item} />)}
          {isLoading &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <Skeleton key={index}>
                <Card
                  title=""
                  description=""
                  channelTitle=""
                  thumbnailUrl=""
                  publishedAt={new Date()}
                />
              </Skeleton>
            ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
