export const convertDateToUnix = (date) => {
  return Math.floor(date.getTime() / 1000);
}

export const convertUnixToDate = (unix) => {
  const milliseconds = unix * 1000;
  return new Date(milliseconds);
}

export const createDate = (date, days, weeks, months, years) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days + 7 * weeks);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
}
