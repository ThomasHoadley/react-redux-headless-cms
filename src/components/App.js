import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.sass";
import GetAgencies from "../containers/agencies/GetAgencies";
import GetAgency from "../containers/agencies/GetAgency";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/agencies" exact component={GetAgencies}></Route>
          <Route path="/agencies/:slug" exact component={GetAgency}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
