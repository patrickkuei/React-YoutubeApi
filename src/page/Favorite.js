import React, { Fragment } from "react";
import { Videos, Video, LikeBtn } from "../elements/styled";

const Favorite = ({ favorites, handleUnlike }) => {
  return (
    <Fragment>
      {favorites[0] ? (
        <Videos>
          {favorites.map((item, index) => (
            <Video key={index}>
              {item.video}
              <LikeBtn onClick={() => handleUnlike(item.id)}>Unlike</LikeBtn>
            </Video>
          ))}
        </Videos>
      ) : (
        <h3>NO FAVORITE VIDEOS</h3>
      )}
    </Fragment>
  );
};

export default Favorite;
