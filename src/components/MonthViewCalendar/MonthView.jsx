import React, { PropsWithChildren } from "react";
import { weekdays } from "../../constants/WeekDays";
import { Week } from "./Week";
import { DateGenerator } from "../../DateGenerator/DateGenerator";
import { serializeDates } from "../helper_functions/SerializeDates";
import { weekSerializers } from "../helper_functions/Week_Serializer";
import { current_date } from "../../constants/CurrentDate";
import { NumberOfDaysToBeGenerated } from "../../constants/NumberOfDaysToBeGenerated";
import months from "../../constants/Months";

export class MonthView extends React.Component {
  constructor(props) {
    super(props);
    var a = DateGenerator(current_date, NumberOfDaysToBeGenerated);
    var c = serializeDates(a);

    this.state = {
      MonthToShow: Object.keys(c),
      numberOfMonth: 0,
      SerializedDates: c,
      Month: [],
    };
  }
  previousMonth = () => {
    if (this.state.numberOfMonth == 0) {
      return;
    }
    this.setState(
      {
        numberOfMonth: this.state.numberOfMonth - 1,
      },
      this.updateMonth()
    );
  };
  nextMonth = () => {
    if (this.state.numberOfMonth == this.state.MonthToShow.length - 1) {
      return;
    }
    this.setState(
      {
        ...this.state,
        numberOfMonth: this.state.numberOfMonth + 1,
      },
      this.updateMonth()
    );
  };
  componentDidMount() {
    var c = weekSerializers(
      this.state.SerializedDates[
        this.state.MonthToShow[this.state.numberOfMonth]
      ]
    );
    this.setState({ Month: c });
  }
  updateMonth() {
    if (this.state.SerializedDates && this.state.Month.length > 0) {
      var c = weekSerializers(
        this.state.SerializedDates[
          this.state.MonthToShow[this.state.numberOfMonth]
        ]
      );
      this.setState({ Month: JSON.parse(JSON.stringify(c)) });
    }
  }

  render() {
    return (
      <div className="main">
        <div className="month-name-conainer">
          <button id="previous-button" onClick={(e) => this.previousMonth()}>
            Previous
          </button>
          &nbsp;&nbsp;
          <span>
            {this.state.MonthToShow.length == 0
              ? ""
              : months[
                  parseInt(this.state.MonthToShow[this.state.numberOfMonth])
                ]["month_name"]}
          </span>
          &nbsp;&nbsp;&nbsp;
          <button id="next-button" onClick={(e) => this.nextMonth()}>
            Next
          </button>
        </div>
        <table>
          <tbody>
            <tr>
              {/* Rendering Weeks  */}
              {weekdays.map((weekday) => {
                return (
                  <td id={weekdays.indexOf(weekday).toString()}>{weekday}</td>
                );
              })}
            </tr>
            {this.state.Month ? (
              this.state.Month.map((week) => {
                return <Week week={week} />;
              })
            ) : (
              <td>Loading..</td>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
