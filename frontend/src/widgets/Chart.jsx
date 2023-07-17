import React from "react";
import { useEffect } from "react";
import { formatDate } from "helpers/date-helper";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Chart = (chartData) => {
  const formatData = () => {
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

  return (
    <div className="chart-widget">
      <div className="chart-buttons">
        <button>24h</button>
        <button>7d</button>
        <button>1m</button>
        <button>3m</button>
        <button>1y</button>
      </div>

<ResponsiveContainer width="100%" height={300}>
      <AreaChart data={formatData(chartData)}>
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        <XAxis dataKey="date" />
        <YAxis domain={["dataMin", "dataMax"]} />
        <Tooltip />
      </AreaChart>
</ResponsiveContainer>
    </div>
  );
};

export default Chart;
