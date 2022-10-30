import { VideoDetail } from "@prisma/client";
import { Router } from "express";
import { getSavedResults } from "../utils/db";

interface Query {
  pageSize?: string;
  page?: string;
  query?: string;
  matchAllWords?: string;
}

export interface Response {
  success: boolean;
  query: string;
  pageInfo: {
    resultsPerPage: number;
    currentPage: number;
    totalResults: number;
    nextPage: boolean;
  };
  items: VideoDetail[];
}

const router = Router();

router.get("/search", async (req, res) => {
  try {
    const { pageSize, page, query, matchAllWords } = req.query as Query;
    const take = pageSize ? parseInt(pageSize) : 10;
    const skip = page ? parseInt(page) * take : 0;
    const flag = matchAllWords === "true";

    // transform query to search for all words in the title
    const matchAllWordsQuery = () => "+" + query.trim().split(" ").join(" +");
    const data = await getSavedResults(
      skip,
      take,
      flag
        ? query
          ? matchAllWordsQuery()
          : query
        : query
        ? query
            .trim()
            .split(" ")
            .map(str => `*${str}*`)
            .join(" ")
        : query
    );
    res.status(200).json({
      success: true,
      query,
      pageInfo: {
        resultsPerPage: data.results.length,
        currentPage: skip / take,
        totalResults: data.totalCount,
        nextPage: skip + data.results.length !== data.totalCount,
      },
      items: data.results,
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Something went wrong!" });
  }
});

export default router;
