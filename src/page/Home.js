import React, { Fragment } from "react";
import GetVideos from "../component/GetVideos";
import HandlePagination from "../component/HandlePagination";

/* pagination實現頁碼 */
import Pagination from "react-js-pagination";

import {
  Button,
  LikeBtn,
  Video,
  Videos,
  Page,
  FiftyBtn,
} from "../elements/styled";

const Home = ({ handleClick }) => {
  //取得各50個影片
  const { isLoaded, isPageChanged, nextPage, prevPage, videos } = GetVideos();

  //like button function
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
    <Fragment>
      {!isLoaded ? (
        <div>lodaing...</div>
      ) : (
        <Fragment>
          <FiftyBtn>
            <Button onClick={prevPage} disabled={!isPageChanged}>
              PREV 50 VIDEOS
            </Button>
            <Button onClick={nextPage} disabled={isPageChanged}>
              NEXT 50 VIDEOS
            </Button>
          </FiftyBtn>
          <Page>
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
          </Page>
          <Videos>
            {perPageVideos.map((item, index) => (
              <Video key={index}>
                {item}
                <LikeBtn onClick={handleLike} value={index}>
                  LIKE
                </LikeBtn>
              </Video>
            ))}
          </Videos>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
