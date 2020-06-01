import React from "react";
import ChangePage from "../component/ChangePage";
import HandlePagination from "../component/HandlePagination";

/* pagination實現頁碼 */
import Pagination from "react-js-pagination";

const Home = ({ handleClick }) => {
  //取得各50個影片
  const { isLoaded, isPageChanged, nextPage, prevPage, videos } = ChangePage();

  const handleLike = (event) => {
    handleClick(event);
    alert("Like");
  };

  //總共50個影片，一頁12個，分5頁顯示，可換頁
  const {
    perPageVideos,
    activePage,
    itemsCountPerPage,
    totalItemsCount,
    onChange,
  } = HandlePagination(videos);

  return (
    <div>
      {!isLoaded ? (
        <div>lodaing...</div>
      ) : (
        <div className="App">
          <div style={{ margin: "30px 45px" }}>
            <button
              className="pageBtn"
              onClick={prevPage}
              disabled={!isPageChanged}
            >
              PREV 50 VIDEOS
            </button>
            <button
              className="pageBtn"
              onClick={nextPage}
              disabled={isPageChanged}
            >
              NEXT 50 VIDEOS
            </button>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={itemsCountPerPage}
              totalItemsCount={totalItemsCount}
              onChange={onChange}
              innerClass="innerClass"
              itemClass="itemClass"
              linkClass="linkClass"
              activeLinkClass="activeLinkClass"
            />
          </div>
          <div className="wrap flex">
            {perPageVideos.map((item, index) => (
              <div className="video" key={index}>
                {item}
                <div className="likeBtnDiv">
                  <button
                    className="likeBtn"
                    onClick={handleLike}
                    value={index}
                  >
                    LIKE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
