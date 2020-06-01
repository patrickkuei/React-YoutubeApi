import { useState, useEffect } from "react";
import makeCard from "./makeCard";

function Fetch(url) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");
  const [prevPageToken, setPrevPageToken] = useState("");

  /* 抓出來的影片資料，50個 */
  const [videos, setvideos] = useState([]);

  /* 取得資料，包括上下頁的參數、影片資料*/
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(true);
        setNextPageToken(data.nextPageToken);
        setPrevPageToken(data.prevPageToken);
        setvideos(makeCard(data));
      })
      .catch((error) => console.log("error: " + error.message));
  }, [url]);

  return { isLoaded, nextPageToken, prevPageToken, videos };
}

export default Fetch;
