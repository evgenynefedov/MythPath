import * as taleStorage from "../../../services/taleStorage";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";

export default function ShareBUtton({ taleId, isPublic, updateLibraries }) {
  const [checked, setChecked] = useState(isPublic);

  const handleChange = (e) => {
    setChecked(e.target.checked);

    taleStorage
      .updateTale({ id: taleId, isPublic: isPublic ? false : true })
      .then(() => {
        updateLibraries();
      });
  };

  // return (
  //   <button onClick={ButtonHanler}>
  //     {isPublic ? "Make unpublic" : "Make public"}
  //   </button>
  // );

  return (
    <FormControlLabel
      control={
        <Switch checked={checked} onChange={handleChange} defaultChecked />
      }
      label="Public"
    />
  );
}
