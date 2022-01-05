import { DateType } from "../types/DateType";

var a = new Date();
const current_year = a.getFullYear();
const current_month = a.getMonth();
const current_day = a.getDate();
const current_weekday = a.getDay();

export const current_date: DateType = {
  day: current_day,
  year: current_year,
  month: current_month,
  weekday: current_weekday,
};
