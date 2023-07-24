# Outline

An engineer has put together a search engine for movies, tv shows and people involved in the entertainment industry. They have partially implemented the search results page. The search results page only displays movies. The other search result types are displayed with an error message.

Your task is to create components for the TV show and people search results and combine it with the existing movie search results.

The endpoint that is used for searching returns movies, tv shows and people in a single response. The other search result types are defined in the [src/clients/tmdb.ts](src/clients/tmdb.ts) file as interfaces.

We also would like you to think of ways to improve the repo, as we would like to scale this repo out to multiple teams.

## Getting started

- Familiarise yourself with the provided data from the API. Refer to the [code here](src/clients/tmdb.ts) and the [endpoint documentation here](https://developer.themoviedb.org/reference/search-multi)
- We recommend you start with the [SearchResultItem component](/src/app/search/SearchResultItem.tsx)
- You are welcome to use the entire repository, create new folders and add files, components as you see fit

## Requirements

- Display TV shows and People as part of the search results page
- TV show results contain the following information:
  - Name
  - Overview
  - First air date
  - Vote average
  - Genres
- People results contain the following information:
  - Name
  - What department they are known for such as directing, acting or special effects
  - Movies/TV shows they are known for

## Guidelines

- Please do not spend any longer than two hours working on the solution. You are welcome to work longer than two hours on the exercise but be aware that spending more time on the solution will not influence the outcome of the exercise
  - We are not counting familiarising yourself with the technologies as a part of those two hours
  - If you do run out of time, update the `CONTEXT.md` with a high level overview of what you have done
- You are allowed to install additional third-party packages for your solution. If you do install additional third party packages please add a short description in the `CONTEXT.md` file on _why_ you have chosen that library over others

## Known issues

There is a known issue with `prop-types` throwing warnings for `children` not being a `ReactNode` for a few MUI components. Feel free to ignore this.
