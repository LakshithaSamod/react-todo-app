import React, { Fragment, useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { UIContext } from "../../store/providers/UIContext.provider";

const PageLoader = () => {
  const [uiStatus] = useContext(UIContext);

  return (
    <Fragment>
      {uiStatus.isload ? (
        <div
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            display: "flex",
            position: "fixed",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(100, 100, 100, 0.5)",
          }}
        >
          <CircularProgress size={70} />
        </div>
      ) : null}
    </Fragment>
  );
};

export { PageLoader };
