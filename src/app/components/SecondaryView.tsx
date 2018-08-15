import * as React from "react";
import { Container } from "flux/utils";
import { TimerReduceStore } from "../store";

interface State {
    runningTime: number;
}

class SecondaryContainerClass extends React.Component<{}, State> {
    public static getStores(): Container.StoresList {
        return [TimerReduceStore];
    }

    public static calculateState(state: State): State {
        const { runningTime } = TimerReduceStore.getState();

        return {
            runningTime: runningTime
        };
    }

    public render(): JSX.Element {
        return <div>{this.state.runningTime}</div>;
    }
}

export const SecondaryContainer = Container.create(SecondaryContainerClass);
