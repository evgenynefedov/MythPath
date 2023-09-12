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
    <Container sx={{ paddingBottom: '60px'}}>
      <Typography variant="h1">Elements of your fairytail</Typography>
      <List sx={{ width: "100%"}}>
        {steps.map((step) => (
          <Box key={step.code}>
            <ListSubheader component="h2">
              {stepConfig[step.code]}:
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
          <Avatar variant="rounded"
            sx={{ width: 56, height: 56, marginRight: 2 }}>
            <ResponsiveImage imgPath={spell.img} aspectRatio={1} />
          </Avatar>
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
