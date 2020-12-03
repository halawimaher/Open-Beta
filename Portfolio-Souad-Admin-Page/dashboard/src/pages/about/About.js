import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Editabout from "./Editabout";
import Addabout from "./Addabout";
import Mainabout from "./Mainabout.js";

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div>
          <Router>
            <Switch>
              <Route exact path="/about/" component={Mainabout} />
              <Route path="/about/add" component={Addabout} />
              <Route path="/about/edit/:id" component={Editabout} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
