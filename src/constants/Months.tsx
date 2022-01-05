import { current_date } from "./CurrentDate";

function IfLeapYear(year: number): boolean {
  if (year % 4 === 0) {
    if (year % 100 == 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
  return false;
}

const months_obj = {
  January: {
    Days: 31,
  },
  February: {
    Days: IfLeapYear(current_date.year) ? 29 : 28,
  },
  March: {
    Days: 31,
  },
  April: {
    Days: 30,
  },
  May: {
    Days: 31,
  },
  June: {
    Days: 30,
  },
  July: {
    Days: 31,
  },
  August: {
    Days: 31,
  },
  September: {
    Days: 30,
  },
  October: {
    Days: 31,
  },
  November: {
    Days: 30,
  },
  December: {
    Days: 31,
  },
};

var months: any[] = [];

for (const [key, value] of Object.entries(months_obj)) {
  var b: any = {};
  b["month_name"] = key;
  b["no_of_days"] = value["Days"];

  months.push(b);
}
export default months;
