import { CONSTANTS } from "../../constants";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Fab,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

/**
 * Card displayes the spell info with button to select/unselect
 * @param {*} props
 * @param {*} props.spell spell data to display
 * @param {function} props.select callback for toggling selection state of the spell
 * @param {boolean} props.selected is the spell selected
 * * @returns
 */
export default function SpellCard({ spell, select, selected }) {
  const relativePath = `${CONSTANTS.cloudinaryBasePath}${spell.img}`;
  const myImage = new CloudinaryImage(relativePath, {
    cloudName: CONSTANTS.cloudName,
  }).resize(fill().width(300).height(200).gravity(autoGravity()));
  return (
    <Card sx={{ maxWidth: 300, overflow: "hidden" }} elevation={3}>
      <Box sx={{ position: "relative", height: 200 }}>
        <AdvancedImage cldImg={myImage} />
        <CardActions sx={{ position: "absolute", bottom: 0 }}>
          {selected ? (
            <Fab color="secondary" variant="extended" onClick={select}>
              <RemoveIcon />
              Remove
            </Fab>
          ) : (
            <Fab color="primary" variant="extended" onClick={select}>
              <AddIcon />
              Add
            </Fab>
          )}
        </CardActions>
      </Box>
      <CardContent>
        <Typography variant="h2">
          {spell.name}
        </Typography>
        <Typography variant="body1">
          {spell.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
