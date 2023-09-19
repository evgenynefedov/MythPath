import {
  Box,
  Card,
  CardContent,
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
  const DEFAULT_FORM_VALUES = {
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
  };

  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let changedFormValues = { ...formValues };
    changedFormValues[name].value = value;
    changedFormValues[name].error =
      formValues[name].required && value.length === 0;
    changedFormValues.submitDisabled = false;

    Object.keys(changedFormValues).forEach((i) => {
      changedFormValues.submitDisabled =
        changedFormValues.submitDisabled ||
        changedFormValues[i].error ||
        (changedFormValues[i].required &&
          changedFormValues[i].value.length === 0);
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
      isCustom: true,
    };

    updateCustomSpells(customSpell);
    setFormValues(DEFAULT_FORM_VALUES);
  };

  const handleImageUploader = (imgInfo) => {
    let changedFormValues = { ...formValues };
    changedFormValues.spellImage.value = imgInfo.path;
    setFormValues(changedFormValues);
  };

  return (
    <Card
      sx={{ width: 300, overflow: "hidden" }}
      elevation={3}
      className="clickable_card"
    >
      <Box sx={{ position: "relative", height: 200 }}>
        <ResponsiveImage
          imgPath={formValues.spellImage.value}
          aspectRatio={300 / 200}
        />
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            height: 200,
            width: "100%",
            top: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CloudinaryUploader handleImageUploader={handleImageUploader} />
        </Box>
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

          {!formValues.submitDisabled && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          )}
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
