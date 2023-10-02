import { emptyFuntion } from "../../../helpers/util.helper";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
const ModelWrapper = ({
  children = null,
  title = "",
  isOpen = false,
  onSubmit = emptyFuntion,
  onCancel = emptyFuntion,
}) => {
  return (
    <Modal open={isOpen} onClose={onCancel}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>{title}</h2>
        {children}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Button
            variant="outlined"
            onClick={onCancel}
            style={{ marginRight: "10px" }}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={onSubmit} color="primary">
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export { ModelWrapper };
