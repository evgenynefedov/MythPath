import * as taleStorage from "../../../services/taleStorage";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function ShareButton({ taleId, isPublic, updateLibraries }) {
  const handleChange = () => {
    taleStorage.updateTale({ id: taleId, isPublic: !isPublic }).then(() => {
      updateLibraries();
    });
  };

  return (
    <FormControlLabel
      control={<Switch checked={isPublic} onChange={handleChange} />}
      label="Public"
    />
  );
}
