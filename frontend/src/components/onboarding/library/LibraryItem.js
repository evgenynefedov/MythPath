import { Card, CardContent, Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getUserUUID } from "../../../Utils/getUserUUID";
import DeleteButton from "./DeleteButton";
import ShareButton from "./ShareButton";
import ResponsiveImage from "./../../ui/ResponsiveImage";

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
    <Card sx={{ maxWidth: 300, overflow: "hidden" }} elevation={3}>
      <Link to={`/tale-viewer/${taleId}`} style={{ position: "relative", height: 200, display: "block" }}>
        <ResponsiveImage 
          imgPath={
            cover
              ? cover
              : "https://source.unsplash.com/random?wallpapers"
            } 
          aspectRatio={300 / 200} />
         
      </Link>
      <CardContent>
          <Typography variant="h2">
           {title}
          </Typography>
        { userUUID === getUserUUID() && withControls && (
          <Box className="library_controls">
            <DeleteButton taleId={taleId} updateLibraries={updateLibraries} />
            <ShareButton
              taleId={taleId}
              isPublic={isPublic}
              updateLibraries={updateLibraries}
            />
          </Box>  
        )}
        </CardContent>
    </Card>
    </Grid>
    // <Grid item xs={12} sm={6} md={4} sx={{ p: 0, m: 0 }}>
    //   <CardMedia
    //     component="div"
    //     sx={{ height: "250px" }}
    //     image={
    //       cover
    //         ? CONSTANTS.cloudinaryBaseLink + cover
    //         : "https://source.unsplash.com/random?wallpapers"
    //     }
    //   >
    //     {userUUID === getUserUUID() && withControls && (
    //       <>
    //         <DeleteButton taleId={taleId} updateLibraries={updateLibraries} />
    //         <ShareButton
    //           taleId={taleId}
    //           isPublic={isPublic}
    //           updateLibraries={updateLibraries}
    //         />
    //       </>
    //     )}
    //     <Link to={`/tale-viewer/${taleId}`}>
    //       <Typography variant="h3" className="tale__tittle">
    //         {title}
    //       </Typography>
    //     </Link>
    //   </CardMedia>
    // </Grid>
  );
}
