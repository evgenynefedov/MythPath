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
  Container
} from "@mui/material";
import { CONSTANTS } from "../../constants";
import CasinoIcon from "@mui/icons-material/Casino";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

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
    <Container sx={{ paddingBottom: '60px'}}>
      <Typography variant="h1">Elements of your fairytail</Typography>
      <List sx={{ width: "100%"}}>
        {steps.map((step) => (
          <Box key={step.code}>
            <ListSubheader component="h2">
              {STEP_NAMES[step.code]}:
            </ListSubheader>
            {step.isMulti ? (
              step.value.length > 0 ? 
                <List key={`list-${step.code}`} sx={{ width: "100%"}} className="inner_list">
                  {step.value.map((spell) => <StoryParamCard key={spell.name} spell={spell} />)}
                </List>
              : (
                <RandomCard key={`card-${step.code}`} />
              )
              )
               : (
              step.value &&
              (step.value.name ? (
                <StoryParamCard spell={step.value} key={step.value.id} />
              ) : (
                <RandomCard key={`card-${step.code}`} />
              ))
            )}
          </Box>
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
    </Container>
  );
}

function StoryParamCard({ spell }) {
  return (
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar
            src={`${CONSTANTS.cloudinaryBaseLink}${spell.img}`}
            alt={spell.name}
            variant="rounded"
            sx={{ width: 56, height: 56, marginRight: 2 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={spell.name}
          secondary={
            <Typography variant="body3" noWrap>
              {spell.description}
            </Typography>
          }
        />
      </ListItem>
  );
}

function RandomCard() {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          variant="rounded"
          sx={{ width: 56, height: 56 }}>
          <CasinoIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Randomly selected" />
    </ListItem>
  );
}
