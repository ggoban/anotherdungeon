import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DungeonPage from "./views/DungeonPage/DungeonPage";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={DungeonPage}/>
    </BrowserRouter>
  );
}

export default App;
