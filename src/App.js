import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DungeonPage from "./views/DungeonPage/DungeonPage";
import MainPage from "./views/MainPage/Mainpage";
import EtcPage from "./views/EtcPage/EtcPage";
import JobPage from "./views/JobPage/JobPage";
import Header from "./views/Header/Header";
import PersonalPage from "./views/PersonalPage/PersonalPage";

function App() {
  return (
    <Router basename="/anotherdungeon">
        <Header/>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/dungeon" component={DungeonPage}/>
          <Route exact path="/etc" component={EtcPage}/>
          <Route exact path="/job" component={JobPage}/>
          <Route exact path="/personal" component={PersonalPage}/>
    </Router>    
  );
}

/*-- 
SPDX-FileCopyrightText: © 2021 Hyun Uk Lee <as0266@naver.com>

SPDX-License-Identifier: MIT
--*/

export default App;
