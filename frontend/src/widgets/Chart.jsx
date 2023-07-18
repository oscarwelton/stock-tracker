import React from "react";
import { useEffect } from "react";
import { formatDate, convertDateToUnix } from "helpers/date-helper";
import { useLocation } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartConfig } from "../helpers/chartConfig";

const Chart = () => {
  const location = useLocation();
  const [chartData, setChartData] = React.useState([]);
  const now = new Date();

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

  const HandleClick = async (period) => {
    const chartRequest = chartConfig[period];
    chartRequest["symbol"] = location.state.symbol;
    chartRequest["to"] = convertDateToUnix(now);

    await fetch(`http://localhost:3001/chart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chartRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        setChartData(data);
      });
  };

  useEffect(() => {
    HandleClick("1d");
  }, []);

  return (
    <div className="chart-widget">
      <div className="chart-buttons">
        <button onClick={(e) => HandleClick(e.target.innerText)}>1d</button>
        <button onClick={(e) => HandleClick(e.target.innerText)}>7d</button>
        <button onClick={(e) => HandleClick(e.target.innerText)}>1m</button>
        <button onClick={(e) => HandleClick(e.target.innerText)}>3m</button>
        <button onClick={(e) => HandleClick(e.target.innerText)}>1y</button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={formatData()}>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
