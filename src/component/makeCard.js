import React from "react";
import Snippet from "../component/Snippet";
import Thumbnails from "../component/Thumbnails";

const makeCard = (data) => {
  return data.items.map((item, index) => (
    <div key={item.id}>
      <Thumbnails item={item} />
      <Snippet item={item} />
    </div>
  ));
};

export default makeCard;
