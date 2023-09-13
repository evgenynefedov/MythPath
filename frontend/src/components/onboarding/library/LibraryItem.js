import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import { CONSTANTS } from "../../../constants";
import { getUserUUID } from "../../../Utils/getUserUUID";
import DeleteButton from "./DeleteButton";
import ShareBUtton from "./ShareButton";

export default function LibraryItem({
  taleId,
  title,
  cover,
  userUUID,
  isPublic,
  updateLibraries,
  withControls,
}) {
  return (
    <Grid item xs={12} sm={6} md={4} sx={{ p: 0, m: 0 }}>
      <CardMedia
        component="div"
        sx={{ height: "250px" }}
        image={
          cover
            ? CONSTANTS.cloudinaryBaseLink + cover
            : "https://source.unsplash.com/random?wallpapers"
        }
      >
        <Link to={`/tale-viewer/${taleId}`}>
          <Typography variant="h3" className="tale__tittle">
            {title}
          </Typography>
        </Link>

        {userUUID === getUserUUID() && withControls && (
          <>
            <DeleteButton taleId={taleId} updateLibraries={updateLibraries} />
            <ShareBUtton
              taleId={taleId}
              isPublic={isPublic}
              updateLibraries={updateLibraries}
            />
          </>
        )}
      </CardMedia>
    </Grid>
  );
}
