import React, { useState } from "react";

import { isEmpty } from "../../../helpers/util.helper";

import { InputBox } from "../../ui-elements/form/InputBox";
import { ModelWrapper } from "../../ui-elements/common/ModelWrapper";

const EditTodo = ({ todo, onSave, onCancel }) => {
  const [editedName, setEditedName] = useState(todo.name);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (isEmpty(editedName)) {
      setError("New Title is required");
    } else {
      setError("");
      onSave({ ...todo, name: editedName });
    }
  };

  return (
    <ModelWrapper
      title="Edit Item"
      isOpen={true}
      onSubmit={handleSave}
      onCancel={onCancel}
    >
      <InputBox
        label="New Title"
        name="title"
        isRequired={true}
        value={editedName}
        onChange={(value) => {
          setEditedName(value);
          if (isEmpty(value)) {
            setError("New Title is required");
          } else {
            setError("");
          }
        }}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </ModelWrapper>
  );
};

export default EditTodo;
