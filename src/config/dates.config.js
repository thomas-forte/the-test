import * as React from "react";

const dates = [
  { value: "1", display: "1 (Wun)" },
  { value: "2", display: "2 (Too)" },
  { value: "3", display: "3 (Three)" },
  { value: "4", display: "4 (Fow-er)" },
  { value: "5", display: "5 (Fife)" },
  { value: "6", display: "6 (Six)" },
  { value: "7", display: "7 (Sev-in)" },
  { value: "8", display: "8 (Aayt)" },
  { value: "9", display: "9 (Niner)" },
  { value: "10", display: "10 (Ten)" },
  { value: "11", display: "11 (ee-lev -in)" },
  { value: "12", display: "12 (12)" },
  { value: "13", display: "13 (...)" },
  { value: "14", display: "14" },
  { value: "15", display: "15" },
  { value: "16", display: "16" },
  { value: "17", display: "17" },
  { value: "18", display: "18" },
  { value: "19", display: "19" },
  { value: "20", display: "20" },
  { value: "21", display: "21" },
  { value: "22", display: "22" },
  { value: "23", display: "23-31" },
];

export const datesAsSelectOptions = dates.map((date) => (
  <option key={date.value} value={date.value}>
    {date.display}
  </option>
));

const months = [
  { value: "January", display: "January" },
  { value: "March", display: "March" },
  { value: "April", display: "April" },
  { value: "May", display: "May" },
  { value: "June", display: "June" },
  { value: "Julio", display: "Julio" },
  { value: "August", display: "August" },
  { value: "September", display: "September" },
  { value: "November", display: "November" },
  { value: "Month 12", display: "December" },
];

export const monthsAsSelectOptions = months.map((month) => (
  <option key={month.value} value={month.value}>
    {month.display}
  </option>
));

export function generateYearsAsSelectOptions() {
  const list = [];
  for (let c = 1; c <= new Date().getFullYear(); c++) {
    list.push(c);
  }
  return list.map((i) => (
    <option value={i} key={i.toString()}>
      {i}
    </option>
  ));
}

export function generateDayOfTheWeekRadioButtons() {
  const list = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  return list.map((dow) => (
    <input
      className="form-check-input form-check-inline"
      type="radio"
      name="dow"
      required
      value={dow}
      key={dow}
    />
  ));
}
