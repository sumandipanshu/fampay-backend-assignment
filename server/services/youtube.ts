import axios from "axios";

interface YoutubeSearchResultItem {
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
  publishedAfter: string,
  query = process.env.YOUTUBE_SEARCH_QUERY,
  nextPageToken = null,
  apiKeyIndex = 0,
  totalResultsYet = 0
): Promise<YoutubeSearchResultItem[]> => {
  // Base case: when query hits total search limit defined by user
  if (totalResultsYet >= +process.env.TOTAL_RESULTS_PER_QUERY) return [];

  const apiKeys: string[] = JSON.parse(process.env.API_KEYS);
  const url = "https://www.googleapis.com/youtube/v3/search";
  const params = {
    q: query,
    type: "video",
    order: "date",
    part: "snippet",
    publishedAfter,
    maxResults: 50,
    key: apiKeys[apiKeyIndex],
    pageToken: nextPageToken,
  };
  try {
    const response = await axios.get(url, { params });
    const results = response.data;
    return [
      ...results.items,
      // Recursion: Keep fetching next page results untill it hits the base case
      ...(await youtubeSearchResults(
        publishedAfter,
        query,
        results.nextPageToken,
        apiKeyIndex,
        totalResultsYet + results.pageInfo.resultsPerPage
      )),
    ];
  } catch (err) {
    const apiError = err.response.data;
    console.log(apiError);
    // If current apiKey's quota limit is exceeded then use next apiKey in list
    if (
      apiError.error.errors.reason === "quotaExceeded" &&
      apiError.error.code === 403 &&
      apiKeyIndex + 1 < apiKeys.length
    ) {
      return await youtubeSearchResults(
        query,
        nextPageToken,
        apiKeyIndex + 1,
        totalResultsYet
      );
    }
    return [];
  }
};
