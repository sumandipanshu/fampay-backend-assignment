import { Router } from "express";
import { getSavedResults } from "../utils/db";

interface Query {
  pageSize?: string;
  page?: string;
  q?: string;
  matchAllWords?: string;
}

const router = Router();

router.get("/search", async (req, res) => {
  try {
    const { pageSize, page, q, matchAllWords } = req.query as Query;
    const take = pageSize ? parseInt(pageSize) : 10;
    const skip = page ? parseInt(page) * take : 0;
    const flag = matchAllWords === "true";

    // transform query to search for all words in the title
    const matchAllWordsQuery = () => "+" + q.split(" ").join(" +");
    const data = await getSavedResults(
      skip,
      take,
      flag ? (q ? matchAllWordsQuery() : q) : q
    );
    res.status(200).json({
      query: q,
      pageInfo: {
        resultsPerPage: data.results.length,
        currentPage: skip / take,
        totalResults: data.totalCount,
        nextPage: skip + data.results.length !== data.totalCount,
      },
      items: data.results,
    });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong!" });
  }
});

export default router;
