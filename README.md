# Serko Exercise: Dionysus

**Welcome to this exercise repository.**

The intention for this exercise is to understand a bit more about how you work as a frontend focussed engineer.

We have designed this exercise to take approximately 2 hours of your time.
If the exercise is not completed in full, feel free to add some notes as a markdown file explaining why and how you would have continued with more time.

## Creating your workspace

We are utilising Github's template repository feature. Please create your own copy of this repository by clicking the **"Use this Template"** button and selecting the **"Create a new repository"** option.

![Github usage](github-use-template.png)

When you are done, please submit the URL to your Github repo back to us.

## Where to start

- Please head over to read the [instructions](INSTRUCTIONS.md)
- Also consider the [context](CONTEXT.md) file we have provided for your notes
- Familiarise yourself with the [Figma design file](https://www.figma.com/file/hGMcwa4NCwkUYvdfUtPueK/FE-Interview---Movie-results-page?type=design&node-id=6%3A2634&mode=dev) that shows the desired outcome
  - We have added preview screenshots to this repository but the Figma design file is the source of truth and contains all values, like colours or padding, needed to build the components
  - [Expected search results page](./screenshots/movie-results-card.png)
  - [Movie result card](./screenshots/movie-results-card.png)
  - [TV show result card](./screenshots/tv-show-results-card.png)
  - [People result card](./screenshots/people-results-card.png)

## How to get running

### Prerequisites

- Node LTS, we have tested this exercise using version 18.x
- A `.env.local` file containing your `TMDB_AUTH` key. To save time we have provided a `.env.local` in our email containing a TMDB key you can use. Feel free to use your own

### Running code

#### Quick start

```bash
npm install
npm run dev
```

### Further reading

We understand that this might be the first time that you have encountered some of these technologies. Here is a list of links that you may find useful for completing the exercise:

- [NextJS](https://nextjs.org/docs)
- [Material UI](https://mui.com/material-ui/getting-started/)
- [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started)
