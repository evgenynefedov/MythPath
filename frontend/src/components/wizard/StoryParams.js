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
import StoryParamsConfig from "../../Data/storyParamsConfig.json";

/**
 * Component to show entered story steps
 */
export default function StoryParams({ steps, createHandler, language = "en" }) {
  const stepConfig = StoryParamsConfig.steps.reduce((acc, step) => {
    acc[step.code] = step.text.title[language];
    console.log(acc);
    return acc;
  }, {});
  return (
    <>
      <Typography variant="h4">Elements of your fairytail:</Typography>
      <List sx={{ width: "100%" }}>
        {steps.map((step) => (
          <>
            <ListSubheader key={step.code} component="div">
              {stepConfig[step.code]}:
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
