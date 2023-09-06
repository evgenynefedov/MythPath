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

export default function SpellCard({ spell, select, selected }) {
  function selectHandler() {
    select(spell);
  }
  return (
    <Card sx={{ maxWidth: 300 }} elevation={3}>
      {/* TODO: Fix media height */}
      <CardMedia
        sx={{ height: 200 }}
        image={`${CONSTANTS.cloudinaryBaseLink}${spell.img}`}
        title={spell.name}
      >
        {/* TODO: Align button to the bottom */}
        <CardActions>
          {selected ? (
            <Fab
              color="secondary"
              aria-label="remove"
              variant="extended"
              onClick={selectHandler}
            >
              <RemoveIcon />
              Remove
            </Fab>
          ) : (
            <Fab
              color="primary"
              aria-label="add"
              variant="extended"
              onClick={selectHandler}
            >
              <AddIcon />
              Add
            </Fab>
          )}
        </CardActions>
      </CardMedia>
      <CardContent>
        <Typography variant="h5" component="div">
          {spell.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {spell.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
