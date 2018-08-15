import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";

import { MainApp } from "./components/App";
import { AppHistory } from "./components/AppHistory";
import { Navigation } from "./components/Navigation";
import { SecondaryContainer } from "./components/SecondaryView";

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <Router history={AppHistory}>
                <div>
                    <Navigation />
                    <div>
                        <Switch>
                            <Route exact path="/" component={MainApp} />
                            <Route exact path="/secondary" component={SecondaryContainer} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app-root"));
