"use client";
import { Pagination } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useCallback } from "react";

export const SearchResultsPaginationClient = ({
  count,
  page,
}: {
  count: number;
  page: number;
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleOnChange = (_: ChangeEvent<unknown>, page: number) => {
    router.push(pathName + "?" + createQueryString("page", page.toString()));
  };

  return <Pagination count={count} page={page} onChange={handleOnChange} />;
};
