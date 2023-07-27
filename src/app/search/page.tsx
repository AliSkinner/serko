import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { fetchSearchResults } from "@/clients/tmdb";
import { TotalSearchResults } from "./TotalSearchResults";
import { SearchResultsPaginationServer } from "./SearchResultsPagination.server";
import { SearchResultItem } from "./SearchResultItem";
import { Stack } from "@mui/material";
import { composeSearchResultsData } from "@/util/composeSearchResultsData";

export default async function StarredPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [searchResults, movieGenres, tvGenres] = await fetchSearchResults({
    query: searchParams.q as string,
    page: searchParams.page as string,
  });

  const composedSearchResults = composeSearchResultsData({
    results: searchResults.results,
    tvGenres: tvGenres.genres,
    movieGenres: movieGenres.genres,
  });

  return (
    <Container maxWidth="md">
      <TotalSearchResults resultCount={searchResults.total_results} />
      <Stack direction="column" spacing={4} my={4}>
        {composedSearchResults.map((result) => (
          <SearchResultItem key={result.id} {...result} />
        ))}
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchResultsPaginationServer
          count={searchResults.total_pages}
          page={searchResults.page}
        />
      </Box>
    </Container>
  );
}
