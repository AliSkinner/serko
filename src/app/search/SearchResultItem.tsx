import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

export type AccentColor = "primary" | "secondary" | "success";

export interface Props {
  accentColor: AccentColor;
  header: string;
  subHeader: string;
  body: string;
  chipLabel: string;
  ratingLabel: string;
  ratingIndicatorValue: number;
  tags: string[];
}

export const SearchResultItem = ({
  accentColor,
  header,
  subHeader,
  body,
  chipLabel,
  ratingLabel,
  ratingIndicatorValue,
  tags,
}: Props) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        title={<Typography variant="h5">{header}</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            {subHeader}
          </Typography>
        }
        sx={{
          flexDirection: "row-reverse",
        }}
        avatar={
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              value={ratingIndicatorValue}
              color={accentColor}
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
                {ratingLabel}
              </Typography>
            </Box>
          </Box>
        }
      />
      <CardContent>{body}</CardContent>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Chip label={chipLabel} variant="outlined" color={accentColor} />
          <Stack
            divider={<Divider orientation="vertical" />}
            direction="row"
            spacing={1}
            alignItems="center"
          >
            {tags.map((tag) => (
              <Typography
                key={tag}
                variant="body2"
                component="div"
                color="text.secondary"
              >
                {tag}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
