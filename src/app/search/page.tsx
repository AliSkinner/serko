import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { searchMulti } from "@/clients/tmdb";
import { TotalSearchResults } from "./TotalSearchResults";
import { SearchResultsPaginationServer } from "./SearchResultsPagination.server";
import { SearchResultItem } from "./SearchResultItem";
import { Stack } from "@mui/material";

export default async function StarredPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { results } = await searchMulti(
    searchParams.q as string,
    searchParams.page as string
  );
  return (
    <Container maxWidth="md">
      <TotalSearchResults searchParams={searchParams} />
      <Stack direction="column" spacing={4} my={4}>
        {results.map((result) => (
          <SearchResultItem {...result} />
        ))}
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchResultsPaginationServer searchParams={searchParams} />
      </Box>
    </Container>
  );
}
