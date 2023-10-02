import { ContextProvider } from "./components/store/providers/ContextProvider";
import { TodoPage } from "./components/pages/Todo.page";
import { TodoTemplate } from "./components/ui-elements/template/TodoTemplate";
import { ErrorBoundary } from "./components/ui-elements/common/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <ContextProvider>
        <TodoTemplate>
          <TodoPage />
        </TodoTemplate>
      </ContextProvider>
    </ErrorBoundary>
  );
};

export default App;
