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
    { resolution: 30 },
    { resolution: 30 },
    { resolution: 60 },
    { resolution: "D" },
    { resolution: "D" },
  ];

  const location = useLocation();
  const [chartData, setChartData] = React.useState([]);
  const [allChartData, setAllChartData] = React.useState([]);
  const now = new Date();
  const period = ["1d", "7d", "1m", "3m", "1y"];

  chartConfig.forEach((config, index) => {
    config["to"] = convertDateToUnix(now);
    config["from"] = getFrom(period[index], now);
    config["symbol"] = location.state.symbol;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(`http://localhost:3001/chart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(chartConfig),
        })
          .then((res) => res.json())
          .then((data) => {
            setAllChartData(data);
            setChartData(formatData(data['7d']));

          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const HandleClick = async (period) => {
    const formattedData = formatData(allChartData[period]);
    setChartData(formattedData);
  }

  return (
    <div className="chart-widget">
      <div className="chart-buttons">
        {period.map((p, index) => (
          <button key={index} onClick={(e) => HandleClick(p)}>
            {p}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
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
