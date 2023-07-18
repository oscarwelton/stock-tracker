import React from "react";
import { useEffect } from "react";
import { formatDate, convertDateToUnix, getFrom } from "helpers/date-helper";
import { formatData } from "helpers/formatChartData";
import { useLocation } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  let chartConfig = [
    { "1d": { resolution: 15 } },
    { "7d": { resolution: 30 } },
    { "1m": { resolution: 60 } },
    { "3m": { resolution: "D" } },
    { "1y": { resolution: "D" } },
  ];

  const location = useLocation();
  const [chartData, setChartData] = React.useState([]);
  const now = new Date();

  const HandleClick = async () => {
    const period = ["1d", "7d", "1m", "3m", "1y"]

    chartConfig.forEach((config, index) => {
      config["to"] = convertDateToUnix(now);
      config["from"] = getFrom(period[index], now);
      config["symbol"] = location.state.symbol;
    });


    await fetch(`http://localhost:3001/chart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chartConfig),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

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
        <AreaChart data={formatData(chartData)}>
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
