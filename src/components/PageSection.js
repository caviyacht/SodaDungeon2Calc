import React from "react";

export default ({ title, description, ...props }) => {
  return (
    <div className={props.className}>
      <h4>{title}</h4>
      <p>
        {description}
      </p>

      {props.children}
    </div>
  );
};