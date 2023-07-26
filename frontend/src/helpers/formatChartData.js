import formatDate from "./date-helper.js";

export const formatData = (dataSet) => {
  if (dataSet && dataSet.c && dataSet.c.length > 0 && dataSet.t) {
    return dataSet.c.map((point, index) => ({
      value: point,
      date: formatDate(dataSet.t[index]),
    }));
  }
};
