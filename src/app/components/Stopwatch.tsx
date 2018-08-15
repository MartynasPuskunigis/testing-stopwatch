import * as React from "react";
import { ActionsCreators } from "../actions-creators";

interface State {
    status: boolean;
    runningTime: number;
}

//let timer: number = 0;

export class Stopwatch extends React.Component<{}, State> {
    public state: State = {
        status: false,
        runningTime: 0
    };

    private handleClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        // this.setState(state => {
        //     if (state.status) {
        //         clearInterval(timer);
        //     } else {
        //         const startTime = Date.now() - this.state.runningTime;
        //         timer = setInterval(() => {
        //             this.setState({ runningTime: Date.now() - startTime });
        //             ActionsCreators.timerChanged(this.state.runningTime);
        //         });
        //     }
        //     return { status: !state.status };
        // });
        ActionsCreators.timerChanged(this.state.runningTime);
    };

    private handleReset: React.MouseEventHandler<HTMLButtonElement> = event => {
        //clearInterval(timer);
        //this.setState({ runningTime: 0, status: false });
        ActionsCreators.timerReset();
    };

    public render(): JSX.Element {
        return (
            <div>
                <p>{this.state.runningTime}ms</p>
                <button onClick={this.handleClick}>{this.state.status ? "Stop" : "Start"}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
