import { YoutubeSearchResultItem } from "../services/youtube";
import prisma from "./prisma";

interface VideoDetail {
  id: string;
  title: string;
  description: string;
  channelTitle: string;
  publishedAt: string | Date;
  thumbnailUrl: string;
}

// save all results from youtube api to db
export const saveVideoresults = async (results: YoutubeSearchResultItem[]) => {
  const data: VideoDetail[] = results.map(video => ({
    id: video.id.videoId,
    title: video.snippet.title,
    description: video.snippet.description,
    channelTitle: video.snippet.channelTitle,
    publishedAt: video.snippet.publishedAt,
    thumbnailUrl:
      video.snippet.thumbnails.high.url ??
      video.snippet.thumbnails.medium.url ??
      video.snippet.thumbnails.default.url,
  }));
  try {
    await prisma.videoDetail.createMany({
      data,
      skipDuplicates: true,
    });
  } catch (err) {
    console.log(err);
  }
};

// get the stored youtube search results from db
export const getSavedResults = async (
  skip = 0,
  take = 10,
  query?: string
): Promise<{ totalCount: number; results: VideoDetail[] }> => {
  // transform into search query
  const getSearchQuery = () => {
    return query ? { where: { title: { search: query } } } : {};
  };
  try {
    const options = {
      skip,
      take,
      orderBy: {
        publishedAt: "desc",
      },
      ...getSearchQuery(),
    };
    // console.log("query", matchAllWordsQuery());
    const [totalCount, results] = await prisma.$transaction([
      prisma.videoDetail.count(getSearchQuery()),
      prisma.videoDetail.findMany(options),
    ]);
    console.log(totalCount, results);
    // const results = await prisma.videoDetail.findMany(options);
    return { totalCount, results };
  } catch (err) {
    console.log(err);
  }
};
