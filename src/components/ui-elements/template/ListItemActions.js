import React from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ListItemSecondaryAction } from "@mui/material";
const ListItemActions = ({ onEditClick, onDeleteClick, isDisabled }) => {
  return (
    <ListItemSecondaryAction style={{ display: "flex", gap: "15px" }}>
      <IconButton edge="end" onClick={onEditClick} disabled={isDisabled}>
        <EditIcon />
      </IconButton>
      <IconButton
        edge="end"
        onClick={onDeleteClick}
        style={{ color: "#e74c3c" }}
      >
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  );
};

export default ListItemActions;
