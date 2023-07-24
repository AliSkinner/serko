interface MovieResult {
  media_type: "movie";
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  genre_ids: Array<number>;
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

interface PersonResult {
  media_type: "person";
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: Array<MovieResult | TVResult>;
}

interface TVResult {
  media_type: "tv";
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

interface SearchMultiData {
  page: number;
  total_pages: number;
  total_results: number;
  results: Array<MovieResult | PersonResult | TVResult>;
}

export const searchMulti = async (
  query: string,
  page: string = "1"
): Promise<SearchMultiData> => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${query}&page=${page}&include_adult=false`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_AUTH}`,
    },
  };
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json() as Promise<SearchMultiData>;
};

interface Genre {
  id: number;
  name: string;
}

interface GenresData {
  genres: Array<Genre>;
}

export const movieGenres = async (): Promise<GenresData> => {
  const url = "https://api.themoviedb.org/3/genre/movie/list";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_AUTH}`,
    },
  };
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json() as Promise<GenresData>;
};

export const tvGenres = async (): Promise<GenresData> => {
  const url = "https://api.themoviedb.org/3/genre/tv/list";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_AUTH}`,
    },
  };
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json() as Promise<GenresData>;
};
