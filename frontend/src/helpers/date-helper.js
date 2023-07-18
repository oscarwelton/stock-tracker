export const convertDateToUnix = (date) => {
  return Math.floor(date.getTime() / 1000);
};


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

export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const formatDateWithTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export const getUnixTimestampOneDayAgo = (currentDate) => {
  const oneDayAgo = new Date(currentDate.getTime() - (24 * 60 * 60 * 1000));
  return Math.floor(oneDayAgo.getTime() / 1000);
};

export const getUnixTimestampOneWeekAgo = (currentDate) => {
  const oneWeekAgo = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000));
  return Math.floor(oneWeekAgo.getTime() / 1000);
};

export const getUnixTimestampOneMonthAgo = (currentDate) => {
  const oneMonthAgo = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    currentDate.getDate()
  );
  return Math.floor(oneMonthAgo.getTime() / 1000);
};

export const getUnixTimestampOneYearAgo = (currentDate) => {
  const oneYearAgo = new Date(
    currentDate.getFullYear() - 1,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  return Math.floor(oneYearAgo.getTime() / 1000);
};
