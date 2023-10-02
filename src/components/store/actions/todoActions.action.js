import {
  requestTodoDataKey,
  refreshTodoDataKey,
} from "../../../configs/action-keys";
import {
  getTodoListAPI,
  editTodoListAPI,
} from "../../../configs/api-end-points";
import { httpRequset } from "../../../helpers/http-wrapper.helper";

const requestData = async (dispatch, uiActions) => {
  try {
    uiActions.setPageLoader(true);
    const data = await httpRequset(getTodoListAPI);
    uiActions.setPageLoader(false);

    dispatch({
      type: requestTodoDataKey,
      payload: data,
    });
  } catch (error) {
    uiActions.setPageLoader(false);
    console.log(error);
    dispatch({
      type: requestTodoDataKey,
      payload: [],
    });
  }
};

const makeTodoAction = async (
  dispatch,
  uiActions,
  apiEndpoint,
  method,
  body
) => {
  try {
    uiActions.setPageLoader(true);
    const data = await httpRequset(apiEndpoint, method, body);
    console.log(`********td-act - ${method}**************`);
    console.log("data", data);
    uiActions.setPageLoader(false);
    dispatch({
      type: refreshTodoDataKey,
    });
  } catch (error) {
    uiActions.setPageLoader(false);
    console.log(error);
  }
};

const addTodoItem = async (dispatch, body, uiActions) => {
  await makeTodoAction(dispatch, uiActions, getTodoListAPI, "POST", body);
};

const editTodoItem = async (dispatch, id, body, uiActions) => {
  await makeTodoAction(
    dispatch,
    uiActions,
    `${editTodoListAPI(id)}`,
    "PUT",
    body
  );
};

const removeTodoItem = async (dispatch, id, uiActions) => {
  await makeTodoAction(dispatch, uiActions, `${editTodoListAPI(id)}`, "DELETE");
};

const todoActions = (dispatch, uiActions) => {
  return {
    requestData: () => requestData(dispatch, uiActions),
    addTodoItem: (body) => addTodoItem(dispatch, body, uiActions),
    editTodoItem: (id, body) => editTodoItem(dispatch, id, body, uiActions),
    removeTodoItem: (id) => removeTodoItem(dispatch, id, uiActions),
  };
};

export { todoActions };
