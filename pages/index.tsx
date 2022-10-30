import { Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { NavBar } from "../components/NavBar";
import { Response } from "../server/routes";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [matchAllWords, setMatchAllWords] = useState(false);
  const [videosData, setVideosData] = useState<Response>(null);
  const [isLoading, setLoading] = useState(true);
  const fetchVideos = async (
    pageSize: number,
    page: number,
    query: string,
    matchAllWords: boolean
  ) => {
    setLoading(true);
    const res = await axios.get("/api/search", {
      params: { pageSize, page, query, matchAllWords },
    });
    if (res.data.success) {
      setVideosData(res.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchVideos(20, 0, searchQuery, matchAllWords);
  }, [searchQuery, matchAllWords]);
  return (
    <Container minH={"100vh"}>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Main
        data={videosData}
        matchAllWords={matchAllWords}
        setMatchAllWords={setMatchAllWords}
        isLoading={isLoading}
      />
      <Footer>
        <Button
          colorScheme="gray"
          disabled={videosData?.pageInfo.currentPage === 0}
          onClick={() =>
            fetchVideos(
              20,
              videosData?.pageInfo.currentPage - 1,
              searchQuery,
              matchAllWords
            )
          }
        >
          Prev
        </Button>
        <Text align={"center"} px={15} py={2}>
          {videosData?.pageInfo.currentPage}
        </Text>
        <Button
          colorScheme="gray"
          disabled={!videosData?.pageInfo.nextPage}
          onClick={() =>
            fetchVideos(
              20,
              videosData?.pageInfo.currentPage + 1,
              searchQuery,
              matchAllWords
            )
          }
        >
          Next
        </Button>
      </Footer>
    </Container>
  );
};

export default Index;
