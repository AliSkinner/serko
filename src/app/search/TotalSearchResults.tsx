import { Typography } from "@mui/material";

interface Props {
  resultCount: number;
}

export const TotalSearchResults = ({ resultCount }: Props) => {
  const label = `Showing ${resultCount} result${resultCount === 1 ? "" : "s"}`;

  return (
    <Typography variant="caption" gutterBottom>
      {label}
    </Typography>
  );
};
