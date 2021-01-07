import React from "react";
import { HashRouter, Route } from "react-router-dom";
import DungeonPage from "./views/DungeonPage/DungeonPage";
import MainPage from "./views/MainPage/Mainpage";
import EtcPage from "./views/EtcPage/EtcPage";
import SearchPage from "./views/SearchPage/SearchPage";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/dungeon" component={DungeonPage}/>
      <Route exact path="/garulea" component={EtcPage}/>
      <Route exact path="/search" component={SearchPage}/>
    </HashRouter>
  );
}

export default App;
