import { Fragment, useState, useContext } from "react";

import { TodoContext } from "../../store/providers/TodoContext.provider";
import { isEmpty } from "../../../helpers/util.helper";

import { ModelWrapper } from "../../ui-elements/common/ModelWrapper";
import { InputBox } from "../../ui-elements/form/InputBox";
import { AddNewItemButton } from "../../ui-elements/form/AddNewButtons";

const initState = {
  isOpen: false,
  title: "",
  error: "",
};

const AddItem = () => {
  const [, todoAction] = useContext(TodoContext);
  const [getStatus, setStatus] = useState(initState);

  const submitData = () => {
    const { title } = getStatus;

    if (isEmpty(title)) {
      setStatus({
        ...getStatus,
        error: "Name is required",
      });
    } else {
      setStatus({
        ...getStatus,
        error: "",
      });

      todoAction.addTodoItem({
        complete: false,
        name: title,
      });

      setStatus(initState);
    }
  };

  return (
    <Fragment>
      <AddNewItemButton
        onClick={() =>
          setStatus({
            ...getStatus,
            isOpen: !getStatus.isOpen,
          })
        }
      />
      <ModelWrapper
        title="Add Item"
        isOpen={getStatus.isOpen}
        onSubmit={() => submitData()}
        onCancel={() =>
          setStatus({
            ...getStatus,
            ...initState,
          })
        }
      >
        <InputBox
          label="Todo Name"
          name="title"
          isRequired={true}
          value={getStatus.title}
          onChange={(value, name) =>
            setStatus({
              ...getStatus,
              [name]: value,
              error: "",
            })
          }
        />
        {getStatus.error && (
          <div style={{ color: "red" }}>{getStatus.error}</div>
        )}
      </ModelWrapper>
    </Fragment>
  );
};

export { AddItem };
