import { PageLoader } from "../common/PageLoader";

const TodoTemplate = ({ children = null }) => {
  return (
    <div className="template-wrapper">
      {children}
      <PageLoader />
    </div>
  );
};

export { TodoTemplate };
