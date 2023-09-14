import * as taleStorage from "../../../services/taleStorage";
import Button from "@mui/material/Button";

export default function DeleteButton({ taleId, updateLibraries }) {
  const ButtonHanler = () => {
    taleStorage.deleteTaleById(taleId).then(() => {
      updateLibraries();
    });
  };

  return (
    <Button onClick={ButtonHanler} variant="contained" size="small">
      Delete
    </Button>
  );
}
