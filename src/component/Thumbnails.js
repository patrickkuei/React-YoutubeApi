import React from "react";
import TimeConvert from "../component/TimeConvert";

const Thumbnails = ({ item }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${item.snippet.thumbnails.medium.url})`,
        width: "320px",
        height: "180px",
        position: "relative",
      }}
    >
      <div className="durationDiv">
        {new Date(TimeConvert(item.contentDetails.duration))
          .toISOString()
          .substr(14, 5)}
      </div>
    </div>
  );
};
export default Thumbnails;
