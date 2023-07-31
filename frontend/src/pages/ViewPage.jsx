import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import StockStats from "../widgets/StockStats";
import CompanyNews from "../widgets/CompanyNews";
import Sentiment from "../widgets/Sentiment";
import { useEffect } from "react";
import Peers from "../widgets/Peers";
import Earnings from "../widgets/Earnings";
import Chart from "../widgets/Chart";
import Footer from "../components/Footer";

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
                <h4>
                  Industry: {profile.finnhubIndustry} Market Cap:{" "}
                  {profile.marketCapitalization}
                </h4>
              </div>
            </div>
            <Chart chart={[location.state.symbol, chartData]} />
            <Earnings earnings={earnings} />
            <StockStats financials={financials} />
          </div>
          <div className="company-news">
            {financials ? (
              <div className="Overview">
                <h3>Overview</h3>
                <p>EPS Growth 3Y: {financials.metric["epsGrowth3Y"]}</p>
                <p>EPS Growth 5Y: {financials.metric["epsGrowth5Y"]} </p>
                <p>
                  Gross Profit Annual:{financials.metric["grossMarginAnnual"]}
                </p>
                <p>Gross Profit 5Y: {financials.metric["grossMargin5Y"]}</p>
                <p>
                  Net Profit Annual:{" "}
                  {financials.metric["netProfitMarginAnnual"]}
                </p>
                <p>Net Profit 5Y: {financials.metric["netProfitMargin5Y"]}</p>
                <p>
                  Current Ratio Annual:{" "}
                  {financials.metric["currentRatioAnnual"]}
                </p>
                <p>
                  Current Ratio Quaterly:{" "}
                  {financials.metric["currentRatioQuarterly"]}
                </p>
                <p>PE Annual: {financials.metric["peAnnual"]}</p>
                <p>PE TTM: {financials.metric["peTTM"]}</p>
              </div>
            ) : (
              <div className="Overview">
                <h3>Data Loading</h3>
              </div>
            )}

            <Sentiment news={news} />
            <CompanyNews news={news} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewPage;
