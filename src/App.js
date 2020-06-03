import React, { useState } from "react";
import GetVideos from "./component/GetVideos";
import HandlePagination from "./component/HandlePagination";
import Favorite from "./page/Favorite";
import Home from "./page/Home";

/* Router實現最愛頁 */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import { Tags, Tag, Contain } from "./elements/styled";

//Todo at HandlePagination.js,

function App() {
  //取得各50個影片
  const { videos } = GetVideos();

  //總共50個影片，一頁12個，分5頁顯示，可換頁
  const { perPageVideos } = HandlePagination(videos);

  /* 收藏功能 */
  const [favorites, setFavorites] = useState([]);

  //favorite function
  const handleClick = (event) => {
    setFavorites([
      ...favorites,
      { id: favorites.length, video: perPageVideos[event.target.value] },
    ]);
  };

  //unfavorite function
  const handleUnlike = (id) => {
    setFavorites(favorites.filter((item) => item.id !== parseInt(id)));
  };

  return (
    <Router>
      <nav>
        <Tags>
          <Tag>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/"
            >
              HOME
            </Link>
          </Tag>
          <Tag>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/favorite"
            >
              FAVORITE
            </Link>
          </Tag>
        </Tags>
      </nav>
      <Contain>
        <Switch>
          <Route path="/favorite">
            <Favorite favorites={favorites} handleUnlike={handleUnlike} />
          </Route>
          <Route path="/">
            <Home handleClick={handleClick} />
          </Route>
        </Switch>
      </Contain>
    </Router>
  );
}

export default App;
