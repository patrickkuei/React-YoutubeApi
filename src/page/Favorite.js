import React from "react";

const Favorite = ({ favorites, handleUnlike }) => {
  return (
    <div>
      {favorites[0] ? (
        favorites.map((item, index) => (
          <div className="video" key={index}>
            {item.video}
            <div className="unlikeBtnDiv">
              <button
                className="unlikeBtn"
                onClick={() => handleUnlike(item.id)}
              >
                Unlike
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1>NO FAVORITE VIDEOS</h1>
      )}
    </div>
  );
};

export default Favorite;
