import React from "react";

import Button from "@mui/material/Button";

const AddNewItemButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="primary"
      size="large"
      fullWidth
      style={{ height: "60px", marginBottom: "15px", fontSize: "16px" }}
    >
      + ADD NEW
    </Button>
  );
};

export { AddNewItemButton };
