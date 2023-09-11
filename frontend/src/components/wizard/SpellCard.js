import { CONSTANTS } from "../../constants";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Icons from './../../themes/sprite.svg'
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
      <Box sx={{ position: "relative", height: 200 }} onClick={select}>
        <AdvancedImage cldImg={myImage} />
        <CardActions sx={{ position: "absolute", top: 0, right: 0, padding: 0 }}>
          <svg className="spell_wand">
            <use href={`${Icons}#click`}/>
          </svg>
        </CardActions>
        {selected &&
          <Box className="selected_spell"> 
            <svg className="spell_wand">
              <use href={`${Icons}#sparkles`}/>
            </svg>
          </Box>
        }
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
