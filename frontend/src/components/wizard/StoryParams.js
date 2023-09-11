import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ResponsiveImage from "../ui/ResponsiveImage";

const STEP_NAMES = {
  world: "World",
  main_character: "Main character",
  additional_characters: "Additional characters",
  locations: "Locations",
};
/**
 * Component to show entered story steps
 */
export default function StoryParams({ steps, createHandler }) {
  return (
    <>
      <Typography variant="h4">Elements of your fairytail:</Typography>
      <List sx={{ width: "100%" }}>
        {steps.map((step) => (
          <>
            <ListSubheader key={step.code} component="div">
              {STEP_NAMES[step.code]}:
            </ListSubheader>
            {step.isMulti ? (
              step.value.length > 0 ? (
                step.value.map((spell) => <StoryParamCard spell={spell} />)
              ) : (
                <RandomCard key={`card-${step.code}`} />
              )
            ) : (
              step.value &&
              (step.value.name ? (
                <StoryParamCard spell={step.value} key={step.value.id} />
              ) : (
                <RandomCard key={`card-${step.code}`} />
              ))
            )}
          </>
        ))}
      </List>
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          size="medium"
          endIcon={<RocketLaunchIcon />}
          onClick={createHandler}
        >
          Create Fairytale
        </Button>
      </Box>
    </>
  );
}

function StoryParamCard({ spell }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <ResponsiveImage imgPath={spell.img} aspectRatio={1} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={spell.name}
          secondary={
            <Typography variant="body2" noWrap sx={{ color: "text.secondary" }}>
              {spell.description}
            </Typography>
          }
        />
      </ListItem>
    </>
  );
}

function RandomCard() {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <CasinoIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Randomly selected" />
    </ListItem>
  );
}
