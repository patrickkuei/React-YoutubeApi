import React from "react";

const Snippet = ({ item }) => {
  return (
    <div>
      <h4>{item.snippet.title}</h4>
      <div className="hideContent">
        Description : {item.snippet.description}
      </div>
    </div>
  );
};
export default Snippet;
