import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Addhome from './Addhome';
import Edithome from './Edithome';
import Mainhome from './Mainhome';


export default class Home extends React.Component {
    
render() {
    return (
        <div className='home'>  
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/home" component={Mainhome} />
                        <Route  path="/home/add" component={Addhome} />
                        <Route  path="/home/edit/:id" component={Edithome}   />
                    </Switch>
                </Router>
                
            </div>
        </div>
    )
}
}

