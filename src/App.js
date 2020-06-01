import React, { useState } from "react";
import ChangePage from "./component/ChangePage";
import HandlePagination from "./component/HandlePagination";
import "./App.css";
import Favorite from "./page/Favorite";
import Home from "./page/Home";

/* Router實現最愛頁 */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  //取得各50個影片
  const { videos } = ChangePage();

  //總共50個影片，一頁12個，分5頁顯示，可換頁
  const { perPageVideos } = HandlePagination(videos);

  /* 收藏功能 */
  const [favorites, setFavorites] = useState([]);

  const handleClick = (event) => {
    setFavorites([
      ...favorites,
      { id: favorites.length, video: perPageVideos[event.target.value] },
    ]);
  };

  const handleUnlike = (id) => {
    setFavorites(favorites.filter((item) => item.id !== parseInt(id)));
  };

  return (
    <Router>
      <nav>
        <div className="flex">
          <h1 className="padding">
            <Link style={{ textDecoration: "none" }} to="/">
              HOME
            </Link>
          </h1>
          <h1 className="padding">
            <Link style={{ textDecoration: "none" }} to="/favorite">
              FAVORITE
            </Link>
          </h1>
        </div>
      </nav>
      <div className="center">
        <Switch>
          <Route path="/favorite">
            <Favorite favorites={favorites} handleUnlike={handleUnlike} />
          </Route>
          <Route path="/">
            <Home handleClick={handleClick} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
