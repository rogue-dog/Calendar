import { DateType } from "../../types/DateType";

export const weekSerializers = (monthArray: DateType[]) => {
  var a: Array<DateType>[] = [[]];
  if (!monthArray) {
    return;
  }
  for (let i = 0; i < monthArray.length; i++) {
    var d = monthArray[i];
    a[a.length - 1][d.weekday] = d;
    if (d.weekday === 6) {
      a.push([]);
    }
  }
  return a;
};
