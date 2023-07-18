import formatDate from "./date-helper.js";

export const formatData = (chartData) => {
  if (
    chartData &&
    chartData.chart &&
    chartData.chart.c &&
    chartData.chart.t
  ) {
    return chartData.chart.c.map((point, index) => ({
      value: point.toFixed(2),
      date: formatDate(chartData.chart.t[index]),
    }));
  }
  return [];
};
