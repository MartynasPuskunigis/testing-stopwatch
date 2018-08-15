import * as React from "react";
import { NavLink } from "react-router-dom";

export class Navigation extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/secondary">Second</NavLink>
            </div>
        );
    }
}
