import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import StockStats from "../widgets/StockStats";
import CompanyNews from "../widgets/CompanyNews";
import { useEffect } from "react";
import Peers from "../widgets/Peers";
import Earnings from "../widgets/Earnings";
import Chart from "../widgets/Chart";

const ViewPage = () => {
  const location = useLocation();
  const [peers, setPeers] = React.useState([]);
  const [earnings, setEarnings] = React.useState([]);
  const [profile, setProfile] = React.useState([]);
  const [financials, setFinancials] = React.useState([]);
  const [chartData, setChartData] = React.useState([]);
  const [news, setNews] = React.useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        await fetch(`http://localhost:3001/${location.state.symbol}`)
          .then((res) => res.json())
          .then((data) => {
            setPeers(data.peers);
            setEarnings(data.earnings);
            setProfile(data.profile);
            setFinancials(data.financials);
            setNews(data.companyNews.feed);
            setChartData(data.chart);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchStats();
  }, [location.state.symbol]);

  return (
    <>
      <Navbar />
      <div className="profile">
        <Peers peers={peers} />

        <div className="stats">
          <div className="information">
            <div className="profile-header">
              <img
                className="company-logo"
                src={profile.logo}
                alt={profile.name}
              />
              <div>
                <h2>
                  {profile.name} ({profile.ticker})
                  <a href={profile.weburl} rel="noreferrer" target="_blank">
                  Visit Site
                </a>
                </h2>
                <h4>Industry: {profile.finnhubIndustry} Market Cap: {profile.marketCapitalization}</h4>

              </div>
            </div>
            <Chart chart={[location.state.symbol, chartData]} />
            <StockStats financials={financials} />
            <Earnings earnings={earnings} />
          </div>
          <div className="company-news">
            <CompanyNews news={news} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPage;
