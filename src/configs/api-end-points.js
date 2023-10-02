const baseUrl = "https://react-http-60f09-default-rtdb.firebaseio.com/";

export const getTodoListAPI = `${baseUrl}todo.json`;
export const createTodoListAPI = `${baseUrl}todo.json`;
export const editTodoListAPI = (todoId) => `${baseUrl}todo/${todoId}.json`;
export const removeTodoListAPI = (todoId) => `${baseUrl}todo/${todoId}.json`;
