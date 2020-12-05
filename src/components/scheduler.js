import React, {Component} from 'react';
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";
import Zoom from "./Zoom";

class Scheduler extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startDate: "2021-10-01",
            days: 31,
            scale: "Day",
            timeHeaders: [
                { groupBy: "Month"},
                { groupBy: "Day", format: "d"}
            ],
            // ...
        };
    }

    zoomChange(args) {
        switch (args.level) {
            case "month":
                this.setState({
                    startDate: DayPilot.Date.today().firstDayOfMonth(),
                    days: DayPilot.Date.today().daysInMonth(),
                    scale: "Day"
                });
                break;
            case "week":
                this.setState({
                    startDate: DayPilot.Date.today().firstDayOfWeek(),
                    days: 7,
                    scale: "Day"
                });
                break;
            default:
                throw new Error("Invalid zoom level");
        }
    }

    render() {
        var {...config} = this.state;
        return (
            <div>

                <div className="toolbar">
                  <Zoom onChange={args => this.zoomChange(args)} />
                </div>

                <DayPilotScheduler
                    {...config}
                />
            </div>
        );
    }
}

export default Scheduler;