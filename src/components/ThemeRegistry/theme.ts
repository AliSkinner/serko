import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: grey[100],
    },
  },
});

export default defaultTheme;
