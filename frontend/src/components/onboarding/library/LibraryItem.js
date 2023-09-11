import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { CONSTANTS } from "../../../constants";

export default function LibraryItem({ id, title, cover }) {
  return (
    <Grid item xs={12} sm={6} md={4} sx={{ p: 0, m: 0 }}>
      <Link to={`/tale-viewer/${id}`}>
          <CardMedia className="tale_page__img"
            component="div"
            sx={{ height: "250px" }}
            image={
              cover
                ? CONSTANTS.cloudinaryBaseLink + cover
                : "https://source.unsplash.com/random?wallpapers"
            }
          >
            <Typography variant="h2" className="tale__tittle">
              {title}
            </Typography>
          </CardMedia>
      </Link>
    </Grid>
  );
}
