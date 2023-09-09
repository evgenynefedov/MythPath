import { CONSTANTS } from "../../constants";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

/**
 * Card displayes the spell info with button to select/unselect
 * @param {*} props
 * @param {*} props.spell spell data to display
 * @param {function} props.select callback for toggling selection state of the spell
 * @param {boolean} props.selected is the spell selected
 * * @returns
 */
export default function SpellCard({ spell, select, selected }) {
  return (
    <Card sx={{ maxWidth: 300 }} elevation={3}>
      {/* TODO: Fix media cropping */}
      <CardMedia
        sx={{ height: 200, position: "relative" }}
        image={`${CONSTANTS.cloudinaryBaseLink}${spell.img}`}
      >
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
      </CardMedia>
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
