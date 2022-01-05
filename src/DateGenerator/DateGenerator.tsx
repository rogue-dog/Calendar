import months from "../constants/Months";
import { NumberOfDaysToBeGenerated } from "../constants/NumberOfDaysToBeGenerated";
import { weekdays } from "../constants/WeekDays";
import { DateType } from "../types/DateType";

export function DateGenerator(
  date: DateType,
  NumberOfDaysToBeGenerated: number
) {
  var date_array: DateType[] = [];
  for (let i = 0; i < NumberOfDaysToBeGenerated; i++) {
    var new_date: DateType = nextDay(date);
    date_array.push(new_date);
    date = new_date;
  }
  return date_array;
}
function NextWeekDay(weekday: number): number {
  if (weekday === weekdays.length - 1) {
    return 0;
  }
  return weekday + 1;
}
function nextDay(date: DateType): DateType {
  var new_weekday: number;
  var new_weekday = NextWeekDay(date.weekday);

  //Checking If It is the Year_End
  if (
    date.day === months[date.month]["no_of_days"] &&
    date.month === months.length - 1
  ) {
    return { day: 1, month: 1, year: date.year + 1, weekday: new_weekday };
  }
  //Month-End
  if (date.day === months[date.month]["no_of_days"]) {
    return {
      day: 1,
      month: date.month + 1,
      year: date.year,
      weekday: new_weekday,
    };
  } else {
    //Otherwise Just Increase The Date by 1
    return {
      day: date.day + 1,
      month: date.month,
      year: date.year,
      weekday: new_weekday,
    };
  }
}
