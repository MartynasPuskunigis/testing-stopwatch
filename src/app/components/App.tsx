import * as React from "react";
import { Stopwatch } from "../components/Stopwatch";

export class MainApp extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="App">
                <h1>Stopwatch</h1>
                <Stopwatch />
            </div>
        );
    }
}
