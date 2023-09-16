import * as taleStorage from "../../../services/taleStorage";
import Button from "@mui/material/Button";

import Icons from "./../../../themes/sprite.svg";

export default function DeleteButton({ taleId, updateLibraries }) {
  const ButtonHanler = () => {
    taleStorage.deleteTaleById(taleId).then(() => {
      updateLibraries();
    });
  };

  return (
    <Button onClick={ButtonHanler} variant="contained" size="medium" >
      <svg>
        <use href={`${Icons}#delete`} />
      </svg>
    </Button>
  );
}
