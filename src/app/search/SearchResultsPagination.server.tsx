import { SearchResultsPaginationClient } from "./SearchResultsPagination.client";

interface Props {
  count: number;
  page: number;
}

export const SearchResultsPaginationServer = ({ count, page }: Props) => (
  <SearchResultsPaginationClient count={count} page={page} />
);
