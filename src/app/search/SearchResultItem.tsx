import { movieGenres } from "@/clients/tmdb";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

export const SearchResultItem = async ({
  title = "",
  overview = "",
  media_type,
  release_date,
  vote_average,
  genre_ids,
}: {
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: Array<number>;
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
}) => {
  if (media_type !== "movie") {
    return <Typography>Search result is not a movie</Typography>;
  }

  const { genres } = await movieGenres();

  const genreNames = genre_ids.map((genreId) => {
    const { name } =
      genres.find((currentGenre) => currentGenre.id === genreId) ?? {};
    return name;
  });

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        title={<Typography variant="h5">{title}</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            {new Date(release_date).toLocaleDateString()}
          </Typography>
        }
        sx={{
          flexDirection: "row-reverse",
        }}
        avatar={
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              value={vote_average * 10}
              color="primary"
              thickness={4}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="caption" fontWeight={600} component="div">
                {vote_average.toFixed(1)}
              </Typography>
            </Box>
          </Box>
        }
      />
      <CardContent>{overview}</CardContent>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Chip label="Movie" variant="outlined" color="primary" />
          <Stack
            divider={<Divider orientation="vertical" />}
            direction="row"
            spacing={1}
            alignItems="center"
          >
            {genreNames.map((genreName) => (
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
              >
                {genreName}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
