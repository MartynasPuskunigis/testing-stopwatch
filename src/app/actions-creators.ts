import { Dispatcher } from "simplr-flux";

import { TimerActivated, TimerReset } from "./actions";

export namespace ActionsCreators {
    export function timerChanged(time: number): void {
        Dispatcher.dispatch(new TimerActivated(time));
    }

    export function timerReset(): void {
        Dispatcher.dispatch(new TimerReset());
    }
}
