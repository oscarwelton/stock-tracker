import formatDate from "./date-helper.js";

export const formatData = (dataSet) => {
  if (dataSet && dataSet.c && dataSet.c.length > 0 && dataSet.t) {
    console.log(dataSet);
    return dataSet.c.map((point, index) => ({
      value: point.toFixed(2),
      date: formatDate(dataSet.t[index]),
    }));
  }
};
