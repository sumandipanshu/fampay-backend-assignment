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

// transform query to search for all words in the title
// const matchAllWords = q => "+" + q.split(" ").join(" +");

// get the stored youtube search results from db
export const getSavedResults = async (
  skip = 0,
  take = 10,
  query?: string
): Promise<VideoDetail[]> => {
  try {
    const options = {
      skip,
      take,
      orderBy: {
        publishedAt: "desc",
      },
      ...(query ? { where: { title: { search: query } } } : {}),
    };
    return await prisma.videoDetail.findMany(options);
  } catch (err) {
    console.log(err);
  }
};
