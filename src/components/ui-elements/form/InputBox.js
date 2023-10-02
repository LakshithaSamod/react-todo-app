import { emptyFuntion } from "../../../helpers/util.helper";

import TextField from "@mui/material/TextField";

const InputBox = ({
  label = "",
  name = "",
  isRequired = false,
  value = "",
  onChange = emptyFuntion,
}) => {
  return (
    <TextField
      label={label}
      name={name}
      variant="outlined"
      fullWidth
      required={isRequired}
      value={value}
      onChange={(event) => onChange(event.target.value, name, event)}
    />
  );
};

export { InputBox };
