// import { useEffect, useState } from "react";
// import "./MonthView.css";
// import { current_date } from "../../constants/CurrentDate";
// import months from "../../constants/Months";
// import { NumberOfDaysToBeGenerated } from "../../constants/NumberOfDaysToBeGenerated";
// import { weekdays } from "../../constants/WeekDays";
// import { DateGenerator } from "../../DateGenerator/DateGenerator";
// import { DateType } from "../../types/DateType";

// import { Week } from "./Week";
// import { Month } from "./Month";

// export const MonthViewCalendar: React.FC = () => {
//   var changeMonth = {
//     previousMonth: () => {
//       if (numberOfMonth == 0) {
//         return;
//       }
//       setNumberOfMonth(numberOfMonth - 1);
//     },
//     nextMonth: () => {
//       if (numberOfMonth == monthToShow.length - 1) {
//         setNumberOfMonth(0);
//         return;
//       }
//       setNumberOfMonth(numberOfMonth + 1);
//     },
//   };

//   var [monthToShow, setMonthToShow] = useState<string[]>([]);
//   var [numberOfMonth, setNumberOfMonth] = useState<number>(0);
//   var [SerializedDates, changeSerializedDates] =
//     useState<{ [key: number]: DateType[] }>();
//   let [MonthDates, setMonth] = useState<any>();
//   useEffect(() => {
//     console.log(monthToShow.length);
//     var a = DateGenerator(current_date, NumberOfDaysToBeGenerated);
//     serializeDates(a);
//   }, []);

//   useEffect(() => {
//     if (SerializedDates && monthToShow.length > 0) {
//       var c = weekSerializers(
//         SerializedDates[parseInt(monthToShow[numberOfMonth])]
//       );

//       var d = JSON.parse(JSON.stringify(c));
//       setMonth([...d]);
//       console.log("called");
//       console.log(MonthDates);
//     }
//   }, [numberOfMonth, SerializedDates]);

//   const serializeDates = (a: DateType[]): void => {
//     var date_object: { [key: number]: DateType[] } = {};
//     for (let i = 0; i < a.length; i++) {
//       if (!date_object[a[i].month]) {
//         date_object[a[i].month] = [];
//       }
//       date_object[a[i].month].push(a[i]);
//     }
//     setMonthToShow(Object.keys(date_object));
//     changeSerializedDates(date_object);
//   };

//   const weekSerializers = (monthArray: DateType[]) => {
//     var a: Array<DateType>[] = [[]];
//     if (!monthArray) {
//       return;
//     }
//     for (let i = 0; i < monthArray.length; i++) {
//       var d = monthArray[i];
//       a[a.length - 1][d.weekday] = d;
//       if (d.weekday === 6) {
//         a.push([]);
//       }
//     }
//     return a;
//   };

//   return (
//     <div className="main">
//       <div className="month-name-conainer">
//         <button
//           id="previous-button"
//           onClick={(e) => changeMonth.previousMonth()}
//         >
//           Previous
//         </button>
//         &nbsp;&nbsp;
//         <span>
//           {monthToShow.length == 0
//             ? ""
//             : months[parseInt(monthToShow[numberOfMonth])]["month_name"]}
//         </span>
//         &nbsp;&nbsp;&nbsp;
//         <button id="next-button" onClick={(e) => changeMonth.nextMonth()}>
//           Next
//         </button>
//       </div>
//       {MonthDates ? <Month month={MonthDates} /> : "Ass"}
//     </div>
//   );
export {};
// };
