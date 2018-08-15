import { ReduceStore } from "simplr-flux";

import { TimerActivated, TimerReset } from "./actions";

interface StoreState {
    runningTime: number;
}

let timer: number = 0;

class TimerReduceStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();
        this.registerAction(TimerActivated, this.onClick.bind(this));
        this.registerAction(TimerReset, this.onReset.bind(this));
    }

    private onClick(action: TimerActivated, state: StoreState): void {
        //console.log(action.getTime);
        const startTime = Date.now() - state.runningTime;
        timer = setInterval(() => {
            state = ({ runningTime: Date.now() - startTime });
            console.log(state.runningTime);
        });
    }

    private onReset(action: TimerReset, state: StoreState): void {
        clearInterval(timer);
        //return { runningTime: 0 };
    }

    public getInitialState(): StoreState {
        return {
            runningTime: 0
        };
    }
}

export const TimerReduceStore = new TimerReduceStoreClass();
