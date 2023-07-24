import { searchMulti } from "@/clients/tmdb";
import { Typography } from "@mui/material";

export const TotalSearchResults = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { total_results } = await searchMulti(
    searchParams.q as string,
    searchParams.page as string
  );

  if (total_results === 1) {
    return (
      <Typography variant="caption" gutterBottom>
        Showing {total_results} result
      </Typography>
    );
  }

  return (
    <Typography variant="caption" gutterBottom>
      Showing {total_results} results
    </Typography>
  );
};
