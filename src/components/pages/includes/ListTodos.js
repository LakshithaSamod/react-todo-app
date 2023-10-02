import React, { useContext, useState, useEffect, Fragment } from "react";

import { TodoContext } from "../../store/providers/TodoContext.provider";
import EditTodo from "./EditTodo";
import ListItemActions from "../../ui-elements/template/ListItemActions";

import { List, ListItem, ListItemText } from "@mui/material";
import { Checkbox } from "../../ui-elements/form/CheckBox";

const ListTodos = () => {
  const [state, todoAction] = useContext(TodoContext);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    todoAction.requestData();
  }, []);

  useEffect(() => {
    todoAction.requestData();
  }, [state.refreshStatus]);

  const openEditModal = (item) => {
    setEditItem(item);
  };

  const saveEditItem = (updatedItem) => {
    todoAction.editTodoItem(updatedItem.key, updatedItem);
    setEditItem(null);
  };

  return (
    <Fragment>
      <List>
        {state.todoList.map((item, index) => (
          <ListItem
            key={index}
            style={{
              backgroundColor: item.complete ? "#f0f0f0" : " #d5dbdb  ",
              borderRadius: "15px",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <Checkbox
              value={item.key}
              onChange={(id, checked) =>
                todoAction.editTodoItem(id, { ...item, complete: checked })
              }
              isChecked={item.complete}
            />
            <ListItemText
              primary={item.name}
              style={{
                textDecoration: item.complete ? "line-through" : "none",
              }}
            />
            <ListItemActions
              onEditClick={() => openEditModal(item)}
              onDeleteClick={() => todoAction.removeTodoItem(item.key)}
              isDisabled={item.complete}
            />
          </ListItem>
        ))}
      </List>
      {editItem && (
        <EditTodo
          todo={editItem}
          onSave={saveEditItem}
          onCancel={() => setEditItem(null)}
        />
      )}
    </Fragment>
  );
};

export { ListTodos };
