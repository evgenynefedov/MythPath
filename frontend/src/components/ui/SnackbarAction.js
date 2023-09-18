import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

/**
 * Component with close [x] button to be used as Snackbar action prop
 * @param {*} props.action additional action components to put into snackbar
 * @param {function} props.hideSnackbar callback to function which hides Snackbar
 * @returns
 */
export default function SnackbarAction({ action, hideSnackbar }) {
  return (
    <>
      {action}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={hideSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
}
