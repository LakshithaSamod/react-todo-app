import React from "react";
import backgroundImage from "./background-image.jpg";

const BackgroundImage = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
