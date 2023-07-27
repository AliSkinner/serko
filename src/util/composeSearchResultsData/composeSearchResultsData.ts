import { SearchMultiResult, Genre } from "@/clients/tmdb";
import { AccentColor } from "@/app/search/SearchResultItem";

export const composeSearchResultsData = ({
  results,
  tvGenres,
  movieGenres,
}: {
  results: SearchMultiResult;
  tvGenres: Genre[];
  movieGenres: Genre[];
}) => {
  const tvGenreMap = tvGenres.reduce((accumulator, current) => {
    return { ...accumulator, [`${current.id}`]: current.name };
  }, {});

  const movieGenreMap = movieGenres.reduce((accumulator, current) => {
    return { ...accumulator, [`${current.id}`]: current.name };
  }, {});

  return results
    .filter((result) => ["movie", "tv", "person"].includes(result.media_type))
    .map((result) => {
      if (result.media_type === "person") {
        return {
          id: result.id,
          accentColor: "success" as AccentColor,
          header: result.name,
          subHeader: result.known_for_department,
          body: result.known_for
            .map((media) => {
              return media.media_type === "tv" ? media.name : media.title;
            })
            .join(", "),
          chipLabel: "People",
          ratingLabel: result.popularity.toFixed(0),

          // set popularity score out of 100, rather than TMDB's 500
          ratingIndicatorValue: result.popularity / 5,
          tags: [],
        };
      }

      if (result.media_type === "tv") {
        return {
          id: result.id,
          accentColor: "secondary" as AccentColor,
          header: result.name,
          subHeader: new Date(result.first_air_date).toLocaleDateString(),
          body: result.overview,
          chipLabel: "TV Show",
          ratingLabel: result.vote_average.toFixed(1),

          // set rating score out of 100, rather than TMDB's 10
          ratingIndicatorValue: result.vote_average * 10,
          tags: result.genre_ids.map(
            (id) => tvGenreMap[id.toString() as keyof typeof tvGenreMap],
          ),
        };
      }

      return {
        id: result.id,
        accentColor: "primary" as AccentColor,
        header: result.title,
        subHeader: new Date(result.release_date).toLocaleDateString(),
        body: result.overview,
        chipLabel: "Movie",
        ratingLabel: result.vote_average.toFixed(1),

        // set rating score out of 100, rather than TMDB's 10
        ratingIndicatorValue: result.vote_average * 10,
        tags: result.genre_ids.map(
          (id) => movieGenreMap[id.toString() as keyof typeof movieGenreMap],
        ),
      };
    });
};
