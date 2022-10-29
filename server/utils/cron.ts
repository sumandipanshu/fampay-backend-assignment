import { youtubeSearchResults } from "../services/youtube";
import { saveVideoresults } from "./db";

const yesterday = (d = new Date()) =>
  new Date(d.setDate(d.getDate() - 1)).toISOString();

const defaultOptions = {
  publishedAfter: yesterday(),
  query: process.env.YOUTUBE_SEARCH_QUERY,
  nextPageToken: null as string,
  apiKeyIndex: 0,
  totalResultsYet: 0,
};
export type options = typeof defaultOptions;

export const fetchLatestYoutubeVideosCron = async () => {
  // Fetch latest Youtube videos for given query
  const results = await youtubeSearchResults(defaultOptions);
  if (results.length) {
    defaultOptions.publishedAfter = results[0].snippet.publishedAt;
    saveVideoresults(results);
  }
  defaultOptions.totalResultsYet = 0;
  defaultOptions.nextPageToken = null;

  // Schedule next api fetch after given QUERY_INTERVAL
  const timer = setTimeout(() => {
    fetchLatestYoutubeVideosCron();
    clearTimeout(timer);
  }, +process.env.QUERY_INTERVAL * 1000);
};
