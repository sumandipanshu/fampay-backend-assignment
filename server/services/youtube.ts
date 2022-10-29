import axios from "axios";
import { options } from "../utils/cron";

export interface YoutubeSearchResultItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

export const youtubeSearchResults = async (
  options: options
): Promise<YoutubeSearchResultItem[]> => {
  // Base case: when query results hits total search limit defined by user
  if (options.totalResultsYet >= +process.env.TOTAL_RESULTS_PER_QUERY)
    return [];

  const apiKeys: string[] = JSON.parse(process.env.API_KEYS);
  const url = "https://www.googleapis.com/youtube/v3/search";
  const params = {
    q: options.query,
    type: "video",
    order: "date",
    part: "snippet",
    publishedAfter: options.publishedAfter,
    maxResults: 50,
    key: apiKeys[options.apiKeyIndex],
    pageToken: options.nextPageToken,
  };
  try {
    const response = await axios.get(url, { params });
    const results = response.data;
    options.nextPageToken = results.nextPageToken;
    options.totalResultsYet += results.pageInfo.resultsPerPage;
    return [
      ...results.items,
      // Recursion: Keep fetching next page results untill it hits the base case
      ...(await youtubeSearchResults(options)),
    ];
  } catch (err) {
    const apiError = err.response.data;
    console.log(
      options.publishedAfter,
      JSON.stringify(apiError),
      options.apiKeyIndex
    );
    // If current apiKey's quota limit is exceeded then use next apiKey in list
    if (
      apiError.error.errors[0].reason === "quotaExceeded" &&
      apiError.error.code === 403 &&
      options.apiKeyIndex + 1 < apiKeys.length
    ) {
      options.apiKeyIndex += 1;
      console.log("Using next apiKey", apiKeys[options.apiKeyIndex]);
      return await youtubeSearchResults(options);
    }
    console.log("All apiKey's Quota limit is exceeded.");
    return [];
  }
};
