import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "../Components/User";
import SideBar from "../Components/SideBar";
import Singer from "../Components/Singer";
import Download from "../Components/Download";
import DownloadCount from "../Components/DownloadCount";
import Salary from "../Components/Salary";
import Revenue from "../Components/Revenue";

class Routes extends Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <SideBar />
            <Switch>
              <Route path="/" component={User} exact />
              <Route path="/Singer" component={Singer} exact />
              <Route path="/Download" component={Download} />
              <Route path="/DownloadCount" component={DownloadCount} />
              <Route path="/Salary" component={Salary} />
              <Route path="/Revenue" component={Revenue} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
