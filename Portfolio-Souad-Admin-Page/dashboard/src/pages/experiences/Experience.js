import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Addexperience from "./Addexperience";
import Mainexperience from "./Mainexperience";
import Editexperience from "./Editexperience";

export default class Experience extends React.Component {
  render() {
    return (
      <div className="experience">
        <div>
          <Router>
            <Switch>
              <Route exact path="/experience" component={Mainexperience} />
              <Route path="/experience/new" component={Addexperience} />
              <Route path="/experience/update/:id" component={Editexperience} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
