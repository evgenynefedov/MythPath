import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { CONSTANTS } from "../../../constants";

export default function LibraryItem({ id, title, cover }) {
  return (
    <Grid item xs={12} sm={6} md={4} sx={{ p: 0, m: 0 }}>
      <CardActionArea component="a" href={`/tale-viewer/${id}`}>
        <Card
          sx={{
            position: "relative",
            borderRadius: 2,
          }}
        >
          <CardMedia
            component="div"
            sx={{ pt: "80%" }}
            image={
              cover
                ? CONSTANTS.cloudinaryBaseLink + cover
                : "https://source.unsplash.com/random?wallpapers"
            }
          ></CardMedia>
          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(75,75,75,0.6) 50%, rgba(235,235,235,0) 100%);",
              padding: "10px",
              "&:last-child": { pb: "10px" },
            }}
          >
            <Typography
              color={(theme) => theme.palette.common.white}
              variant="h6"
              component="h4"
              sx={{ padding: 0, margin: 0 }}
            >
              {title}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
