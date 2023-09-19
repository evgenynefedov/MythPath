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
  Container,
  Badge,
} from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";
import Icons from "./../../themes/sprite.svg";
import ResponsiveImage from "../ui/ResponsiveImage";
import StoryParamsConfig from "../../Data/storyParamsConfig.json";
import React from "react";

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
    <Container sx={{ paddingBottom: "60px" }}>
      <Typography variant="h1">Elements of your fairytail</Typography>
      <List sx={{ width: "100%" }}>
        {steps.map((step) => (
          <Box key={step.code}>
            <ListSubheader component="h2">
              {stepConfig[step.code]}
            </ListSubheader>
            {
              <List
                key={`list-${step.code}`}
                sx={{ width: "100%" }}
                className="inner_list"
              >
                {(step.isMulti ? step.value : [step.value]).map((spell) => (
                  <StoryParamCard
                    key={spell.name}
                    spell={spell}
                    isRandom={step.isRandom}
                  />
                ))}
              </List>
            }
          </Box>
        ))}
      </List>
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          size="medium"
          endIcon={<svg>
            <use href={`${Icons}#sparkles`} />
          </svg>}
          onClick={createHandler}
        >
          Create Fairytale
        </Button>
      </Box>
    </Container>
  );
}

function StoryParamCard({ spell, isRandom }) {
  return (
    <ListItem alignItems="center">
      <ListItemAvatar sx={{ marginRight: 2 }}>
        <Badge invisible={!isRandom} badgeContent={<CasinoIcon />}>
          <Avatar variant="rounded" sx={{ width: 56, height: 56 }}>
            <ResponsiveImage imgPath={spell.img} aspectRatio={1} />
          </Avatar>
        </Badge>
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
