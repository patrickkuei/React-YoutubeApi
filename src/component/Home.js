import React, { useState, useEffect } from "react";
import Snippet from "./Snippet";
import Thumbnails from "./Thumbnails";

/* pagination實現頁碼 */
import Pagination from "react-js-pagination";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [nextPageToken, setNextPageToken] = useState("");
  const [prevPageToken, setPrevPageToken] = useState("");

  /* 設定api網址 */
  const youtubeAPI = "https://www.googleapis.com/youtube/v3/videos";
  const part = "?part=snippet,contentDetails";
  const chart = "&chart=mostPopular";
  const maxResults = "&maxResults=50";
  const key = "&key=AIzaSyA9IcwlgqRJrwC0m8Le26ptHngk6rYCVX4";
  const [url, setUrl] = useState(youtubeAPI + part + chart + maxResults + key);

  /* 抓出來的影片資料，50個 */
  const [video, setvideo] = useState([]);

  /* 只能兩頁(限定100個影片) */
  const [isPageChanged, setIsPageChanged] = useState(false);

  /* 取得資料，包括上下頁的參數、影片資料*/
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(true);
        setNextPageToken(data.nextPageToken);
        setPrevPageToken(data.prevPageToken);
        setvideo(
          data.items.map((item, index) => (
            <div key={item.id} className="video">
              {/* <button onClick={handleFavorite} id={index}>
                {index}
              </button> */}
              <Thumbnails item={item} />
              <Snippet item={item} />
            </div>
          ))
        );
      });
  }, [url]);

  /* 用youtube Api的上下頁功能取下50個影片資料 */
  /* 已知BUG：讀取很慢，有時有效；有時沒效 */
  const nextPage = () => {
    setUrl(url + "&pageToken=" + nextPageToken);
    setIsPageChanged(!isPageChanged);
  };
  const prevPage = () => {
    setUrl(url + "&pageToken=" + prevPageToken);
    setIsPageChanged(!isPageChanged);
  };

  /* 用套件react-js-pagination做出頁碼、換頁等功能 */
  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 12;
  const totalItemsCount = 50;
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  let page = [];
  for (let j = 0; j < totalItemsCount / itemsCountPerPage; j++) {
    page[j] = itemsCountPerPage * j;
  }
  let videos = [];
  for (let i = page[activePage - 1]; i < itemsCountPerPage * activePage; i++) {
    videos[i] = video[i];
  }

  /* 沒做出來的收藏功能 */
  const favorite = [];
  const handleFavorite = (e) => {
    if (favorite.length > 0) {
      favorite.map((item) =>
        item.key !== videos[e.target.id].key
          ? favorite.push(videos[e.target.id])
          : console.log("same video, need be deleted")
      );
    } else {
      console.log("no favorite");
      /* favorite.push(videos[e.target.id]); */

      /* Don't know how to handle it, video will have data after couple times re-render, but this push method won't wait that,
      so favorite will be undefined and then can't be mapped and show error */
    }
  };

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
              onChange={handlePageChange}
              innerClass="innerClass"
              itemClass="itemClass"
              linkClass="linkClass"
              activeLinkClass="activeLinkClass"
            />
          </div>
          <div className="wrap flex">{videos.map((item) => item)}</div>
        </div>
      )}
    </div>
  );
};

export default Home;
