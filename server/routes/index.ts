import { Router } from "express";
import { getSavedResults } from "../utils/db";

interface Query {
  pageSize?: string;
  page?: string;
  q?: string;
}

const router = Router();

router.get("/search", async (req, res) => {
  try {
    const { pageSize, page, q } = req.query as Query;
    const take = pageSize ? parseInt(pageSize) : 10;
    const skip = page ? parseInt(page) * take : 0;

    const data = await getSavedResults(skip, take, q);
    res.status(200).json({
      query: q,
      pageInfo: {
        resultsPerPage: data.results.length,
        currentPage: skip / take,
        totalResults: data.totalCount,
      },
      items: data.results,
    });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong!" });
  }
});

export default router;
