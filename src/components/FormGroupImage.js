import React from "react";

export default ({src}) => {
  return (
    <div style={{
      width: "70px",
      height: "70px",
      backgroundImage: `url(${src})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%"
    }}/>
  );
}