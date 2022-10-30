# Backend Assignment

## Project Goal

To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.

---

### Features

- Server calls the YouTube API continuously in background with some interval (say 10 seconds, can be configured using env) for fetching the latest videos for a predefined search query and stores the data of videos (specifically these fields - Video title, description, publishing datetime, thumbnails URLs) in a database with proper indexes.
- A GET API which returns the stored video data in a paginated response sorted in descending order of published datetime.
- A basic search API to search the stored videos using their title and description.
- You can also use Docker compose to run this project.
- Has support for supplying multiple API keys so that if quota is exhausted on one, it automatically uses the next available key.
- A dashboard to view the stored videos with search option.
- Optimised search api, so that it's able to search videos containing partial match for the search query in either video title or description.
  - Ex 1: A video with title _`How to make tea?`_ should match for the search query `tea how`

### How to run

Environment Variables:

```
API_KEYS=["a","b","c"]
YOUTUBE_SEARCH_QUERY=<your_query>
TOTAL_RESULTS_PER_QUERY=<no_of_results_to_fetch_at_a_time>
QUERY_INTERVAL=<no_of_seconds>
DATABASE_URL="mysql://<user>:<password>@<ip_address/domain>:<port>/<database_name>"
```

Using `docker-compose`:

- Prerequisites
  Install [Docker Desktop](https://docs.docker.com/get-docker) for Mac, Windows, or Linux. Docker Desktop includes Docker Compose as part of the installation.
- Run application
  1. Update environment variables in `docker-compose.yml`

```bash
docker-compose up -d
```

Using `npm`:

- Prerequisites

  1. NPM
  2. Node
  3. MySQL server

- Run application
  1. Create a .env file and update it with your credentials

```bash
# Install all dependencies
npm i

# Run Db migrations on your db
npm run migrate-dev

# Run development server
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

### Useful commands

```bash
# Stop all running containers
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)

# Free space
docker system prune -af --volumes
```

### References

- YouTube data v3 API: [https://developers.google.com/youtube/v3/getting-started](https://developers.google.com/youtube/v3/getting-started)
- Search API reference: [https://developers.google.com/youtube/v3/docs/search/list](https://developers.google.com/youtube/v3/docs/search/list)
  - To fetch the latest videos you need to specify these: type=video, order=date, publishedAfter=<SOME_DATE_TIME>
  - Without publishedAfter, it will give you cached results which will be too old
