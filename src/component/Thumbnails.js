import React from "react";

const Thumbnails = ({ item }) => {
  /* 將影片時間轉成MMSS */
  const convertYouTubeDuration = (yt_duration) => {
    const time_extractor = /([0-9]*H)?([0-9]*M)?([0-9]*S)?$/;
    const extracted = time_extractor.exec(yt_duration);
    const hours = parseInt(extracted[1], 10) || 0;
    const minutes = parseInt(extracted[2], 10) || 0;
    const seconds = parseInt(extracted[3], 10) || 0;
    return hours * 3600 * 1000 + minutes * 60 * 1000 + seconds * 1000;
  };

  /* CSS樣式 */
  const styles = {
    durationDiv: {
      position: "absolute",
      bottom: "10px",
      right: "10px",
      color: "white",
      backgroundColor: "rgba(0%,0%,0%,0.8)",
      padding: "1px 8px",
    },
    likeBtnDiv: {
      position: "absolute",
      top: "5px",
      right: "10px",
    },
  };

  return (
    <div
      style={{
        backgroundImage: "url(" + item.snippet.thumbnails.medium.url + ")",
        width: "320px",
        height: "180px",
        position: "relative",
      }}
    >
      <div style={styles.likeBtnDiv}>
        <button className="likeBtn">LIKE</button>
      </div>
      <div style={styles.durationDiv}>
        {new Date(convertYouTubeDuration(item.contentDetails.duration))
          .toISOString()
          .substr(14, 5)}
      </div>
    </div>
  );
};
export default Thumbnails;
