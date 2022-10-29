import {
  useColorModeValue,
  Stack,
  Heading,
  Avatar,
  Box,
  Text,
  Image,
  Icon,
} from "@chakra-ui/react";
import { AccountCircleOutlined } from "@mui/icons-material";
import { formatDistance } from "date-fns";

export const Card = ({
  title,
  description,
  channelTitle,
  publishedAt,
  thumbnailUrl,
}) => {
  return (
    <Box
      maxW={"445px"}
      w={"full"}
      h={430}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
        <Image src={thumbnailUrl} w={320} h={210} alt={"title"} />
      </Box>
      <Stack w={250}>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"xl"}
          fontFamily={"body"}
          noOfLines={2}
          h={"48px"}
        >
          {title}
        </Heading>
        <Text color={"gray.400"} noOfLines={2} h={"48px"}>
          {description}
        </Text>
      </Stack>
      <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
        <Avatar icon={<AccountCircleOutlined />} />
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>{channelTitle}</Text>
          <Text color={"gray.400"}>
            {formatDistance(new Date(publishedAt), new Date(), {
              addSuffix: true,
            })}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};
