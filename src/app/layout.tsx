import * as React from "react";
import { Roboto } from "next/font/google";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import LocalMovies from "@mui/icons-material/LocalMovies";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Link from "next/link";
import { grey } from "@mui/material/colors";

export const metadata = {
  title: "Dionysus",
  description: "Search movies, tv shows, people",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar>
              <LocalMovies sx={{ mr: 1, width: 32, height: 32 }} />
              <Typography
                variant="h4"
                noWrap
                fontWeight={700}
                sx={{ textTransform: "uppercase" }}
              >
                <Link href="/" passHref legacyBehavior>
                  <MuiLink color="inherit" underline="none">
                    Dionysus
                  </MuiLink>
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
