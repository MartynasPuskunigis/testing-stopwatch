export class TimerActivated {
    constructor(private time: number) {}

    public get getTime(): number {
        return this.time;
    }
}

export class TimerReset {}
