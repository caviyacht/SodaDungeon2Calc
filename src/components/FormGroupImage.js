import React from "react";
import classNames from "classnames";

export default ({src, rounded}) => {
  return (
    <div className={classNames({rounded: rounded})} style={{
      width: "70px",
      height: "70px",
      backgroundImage: `url(${src})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%"
    }}/>
  );
}