import { useState } from "react";
import Fetch from "./Fetch";
import SetURL from "./SetURL";

function GetVideos(handleClick) {
  const originUrl = SetURL();

  //設定不同頁數的url
  const [url, setUrl] = useState(originUrl);

  //代入api網址後取回值
  const { isLoaded, nextPageToken, prevPageToken, videos } = Fetch(url);

  /* 只能兩頁(限定100個影片) */
  const [isPageChanged, setIsPageChanged] = useState(false);

  /* 用youtube Api的上下頁功能取下50個影片資料 */
  const nextPage = () => {
    setUrl(`${originUrl}&pageToken=${nextPageToken}`);
    //   console.log(url);
    setIsPageChanged(!isPageChanged);
  };
  const prevPage = () => {
    setUrl(`${originUrl}&pageToken=${prevPageToken}`);
    //  console.log(url);
    setIsPageChanged(!isPageChanged);
  };

  return { isLoaded, isPageChanged, nextPage, prevPage, videos };
}

export default GetVideos;
