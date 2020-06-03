import React from "react";
import TimeConvert from "../component/TimeConvert";
import { Thumbnail, Time } from "../elements/styled";

const Thumbnails = ({ item }) => {
  return (
    <Thumbnail item={item}>
      <Time>
        {new Date(TimeConvert(item.contentDetails.duration))
          .toISOString()
          .substr(14, 5)}
      </Time>
    </Thumbnail>
  );
};
export default Thumbnails;
