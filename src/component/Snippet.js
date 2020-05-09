import React from "react";

const Snippet = ({ item }) => {
  return (
    <div>
      <h4>{item.snippet.title}</h4>
      <div className="content hideContent">
        Description : {item.snippet.description}
      </div>
    </div>
  );
};
export default Snippet;
