import React from "react";

function HandleFavorite() {
  /* 收藏功能 */
  const [favorite, setFavorite] = useState([]);
  const handleClick = (event) => {
    console.log(event.target.value);
    setFavorite([...favorite, perPageVideos[event.target.value]]);
  };
  return favorite;
}

export default HandleFavorite;
