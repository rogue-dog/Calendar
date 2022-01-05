import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "react-calendar";
import "../node_modules/react-calendar/src/Calendar.less";
import { DateGenerator } from "./DateGenerator/DateGenerator";
import { current_date } from "./constants/CurrentDate";
import { NumberOfDaysToBeGenerated } from "./constants/NumberOfDaysToBeGenerated";
import { DateType } from "./types/DateType";

import { Week } from "./components/MonthViewCalendar/Week";
import { MonthView } from "./components/MonthViewCalendar/MonthView";
function App() {
  var new_date: DateType = {
    day: 30,
    year: 2022,
    month: 11,
    weekday: 1,
  };

  return <MonthView />;
}

export default App;
