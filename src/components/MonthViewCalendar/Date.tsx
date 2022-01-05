import React from "react";
import type { DateType } from "../../types/DateType";

const Date: React.FC<{ data: DateType }> = ({ data }) => {
  return <td>{data.day}</td>;
};
export default Date;
