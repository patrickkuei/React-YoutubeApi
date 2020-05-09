import React from "react";
import "./App.css";
import Favorite from "./component/Favorite";
import Home from "./component/Home";

/* Router實現最愛頁 */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const favorite = "";

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
            <Favorite favorite={favorite} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
