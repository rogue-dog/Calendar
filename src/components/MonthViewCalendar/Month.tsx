import { weekdays } from "../../constants/WeekDays";
import { Week } from "./Week";

export const Month = ({ Month }: any) => {
  console.log(Month);
  return (
    <table>
      <tbody>
        <tr>
          {/* Rendering Weeks  */}
          {weekdays.map((weekday) => {
            return <td id={weekdays.indexOf(weekday).toString()}>{weekday}</td>;
          })}
        </tr>
        {Month ? (
          Month.map((week: any[]) => {
            return <Week week={week} />;
          })
        ) : (
          <td>Loading..</td>
        )}
      </tbody>
    </table>
  );
};
