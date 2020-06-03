import React, { Fragment } from "react";
import Snippet from "../component/Snippet";
import Thumbnails from "../component/Thumbnails";

const makeCard = (data) => {
  //combine thumbnul and title, description as a card
  return data.items.map((item, index) => (
    <Fragment key={item.id}>
      <Thumbnails item={item} />
      <Snippet item={item} />
    </Fragment>
  ));
};

export default makeCard;
