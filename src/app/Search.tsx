"use client";
import {
  Button,
  Card,
  CardContent,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Search = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const navigateToSearchResultsPage = () => {
    router.push(`/search?q=${searchQuery}`);
  };

  return (
    <Card sx={{ mt: 8 }}>
      <CardContent>
        <Stack direction="row" spacing={2}>
          <TextField
            id="search"
            variant="outlined"
            placeholder="Search for movies, TV shows or people"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            inputProps={{
              autoComplete: "off",
            }}
            value={searchQuery}
            onChange={({ target: { value } }) => setSearchQuery(value)}
            onKeyDown={({ key }) => {
              if (key === "Enter") {
                navigateToSearchResultsPage();
              }
            }}
          />
          <Button variant="contained" onClick={navigateToSearchResultsPage}>
            Search
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
