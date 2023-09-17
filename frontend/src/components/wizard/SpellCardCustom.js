import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import Icons from "./../../themes/sprite.svg";
import ResponsiveImage from "../ui/ResponsiveImage";
import { useState } from "react";
import { uuidv4 } from "../../Utils/getUserUUID";
import CloudinaryUploader from "../common/CloudinaryUploader";

export default function SpellCardCustom({ updateCustomSpells }) {
  const [formValues, setFormValues] = useState({
    spellName: {
      value: "",
      required: true,
      error: false,
      errorMessage: "Please enter the name",
    },
    spellDescription: {
      value: "",
      required: false,
      error: false,
      errorMessage: "",
    },
    spellImage: {
      value: null,
      required: false,
      error: false,
      errorMessage: "",
    },
    submitDisabled: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let changedFormValues = { ...formValues };
    changedFormValues[name].value = value;
    changedFormValues[name].error =
      formValues[name].required && value.length === 0;
    changedFormValues.submitDisabled = false;
    Object.keys(changedFormValues).forEach((i) => {
      changedFormValues.submitDisabled =
        changedFormValues.submitDisabled || changedFormValues[i].error;
    });

    setFormValues(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const customSpell = {
      id: e.currentTarget.getAttribute("spell-id"),
      name: formValues.spellName.value,
      description: formValues.spellDescription.value,
      img: formValues.spellImage.value,
    };
    updateCustomSpells(customSpell);
  };

  const handleImageUploader = (imgInfo) => {
    let changedFormValues = { ...formValues };
    console.log(imgInfo);

    changedFormValues.spellImage.value = imgInfo.path;
    setFormValues(changedFormValues);
  };

  return (
    <Card
      sx={{ width: 300, overflow: "hidden" }}
      elevation={3}
      className="clickable_card"
    >
      <Box sx={{ position: "relative", height: 200, backgroundColor: "gray" }}>
        {formValues.spellImage.value ? (
          <Box>{formValues.spellImage.value}</Box>
        ) : (
          <CloudinaryUploader handleImageUploader={handleImageUploader} />
        )}
      </Box>
      <CardContent>
        <Stack
          component="form"
          spell-id={uuidv4()}
          onSubmit={handleSubmit}
          spacing={2}
        >
          <TextField
            id="spellName"
            name="spellName"
            value={formValues.spellName.value}
            required={formValues.spellName.required}
            onChange={handleChange}
            label="Name"
            variant="outlined"
            size="small"
            fullWidth
            error={formValues.spellName.error}
            helperText={
              formValues.spellName.error && formValues.spellName.errorMessage
            }
          />
          <TextField
            id="spellDescription"
            name="spellDescription"
            value={formValues.spellDescription.value}
            required={formValues.spellDescription.required}
            onChange={handleChange}
            label="Description"
            variant="outlined"
            maxRows={4}
            minRows={2}
            size="small"
            multiline
            fullWidth
            error={formValues.spellDescription.error}
            helperText={
              formValues.spellDescription.error &&
              formValues.spellDescription.errorMessage
            }
          />

          <Button
            disabled={formValues.submitDisabled}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </Stack>
      </CardContent>
      {false && (
        <Box className="selected_spell">
          <svg>
            <use href={`${Icons}#stars`} />
          </svg>
        </Box>
      )}
    </Card>
  );
}
