import { searchMulti } from "@/clients/tmdb";
import { SearchResultsPaginationClient } from "./SearchResultsPagination.client";

export const SearchResultsPaginationServer = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { page, total_pages } = await searchMulti(
    searchParams.q as string,
    searchParams.page as string
  );

  return <SearchResultsPaginationClient count={total_pages} page={page} />;
};
