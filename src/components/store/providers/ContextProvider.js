import { TodoContextProvider } from "./TodoContext.provider";
import { UIContextProvider } from "./UIContext.provider";

const ContextProvider = ({ children }) => {
  return (
    <UIContextProvider>
      <TodoContextProvider>{children}</TodoContextProvider>
    </UIContextProvider>
  );
};

export { ContextProvider };
