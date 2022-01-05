import { DateType } from "../../types/DateType";

export const serializeDates = (
  a: DateType[]
): { [key: number]: DateType[] } => {
  var date_object: { [key: number]: DateType[] } = {};
  for (let i = 0; i < a.length; i++) {
    if (!date_object[a[i].month]) {
      date_object[a[i].month] = [];
    }
    date_object[a[i].month].push(a[i]);
  }
  return date_object;
};
