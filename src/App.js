import React from "react";
import { HashRouter, Route } from "react-router-dom";
import DungeonPage from "./views/DungeonPage/DungeonPage";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={DungeonPage}/>
    </HashRouter>
  );
}

export default App;
