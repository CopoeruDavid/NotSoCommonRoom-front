import React, {Component} from 'react';
import {DayPilotScheduler} from "daypilot-pro-react";

class Scheduler extends Component {
    render() {
        return (
                <DayPilotScheduler
                    resources = {[
                    {name: "Resource A", id: "A"},
                    {name: "Resource B", id: "B"},
                    {name: "Resource C", id: "C"},
                    {name: "Resource D", id: "D"},
                    {name: "Resource E", id: "E"},
                    {name: "Resource F", id: "F"},
                    {name: "Resource G", id: "G"}
                ]}
            />
        );
    }
}

export default Scheduler;