import { emptyFuntion } from "../../../helpers/util.helper";

import { Checkbox as MuiCheckbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

const Checkbox = ({
  value = "",
  onChange = emptyFuntion,
  label = "",
  isChecked = false,
}) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          value={value}
          onChange={(event) =>
            onChange(event.target.value, event.target.checked)
          }
          checked={isChecked}
        />
      }
      label={label}
    />
  );
};

export { Checkbox };
