import { useEffect, useState } from "react";
import { JsxElement } from "typescript";
import { DateType } from "../../types/DateType";
import Date from "./Date";

export const Week: React.FC<{ week: Array<DateType> }> = ({ week }) => {
  //   var a = , <p>bs</p>];/
  var [week_breakup, setWeek] = useState<JSX.Element[]>();
  useEffect(() => {
    week_setter(week);
  }, []);
  const week_setter = (week: Array<DateType>) => {
    var c: JSX.Element[] = [];
    for (let i = 0; i < week.length; i++) {
      const day = week[i];
      if (day) {
        c.push(<Date data={day} />);
      } else {
        c.push(<td></td>);
      }
    }
    setWeek(c);
  };

  return <tr>{week_breakup ? week_breakup : <td>Loading..</td>}</tr>;
};
