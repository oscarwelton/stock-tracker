import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import StockGraph from "../widgets/StockGraph";
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
  const [sentiment, setSentiment] = React.useState([]);
  const [financials, setFinancials] = React.useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        await fetch(`http://localhost:3001/${location.state.symbol}`)
          .then((res) => res.json())
          .then((data) => {
            setPeers(data.peers);
            setEarnings(data.earnings);
            setProfile(data.profile);
            setSentiment(data.sentiment);
            setFinancials(data.financials);
            console.log(data.financials);
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
        <h2>{profile.name} ({profile.ticker})</h2>
        <a href={profile.weburl} rel="noreferrer" target="_blank">Visit Site</a>
        <img className="company-logo" src={profile.logo} alt={profile.name} />
        <h4>Industry: {profile.finnhubIndustry}</h4>
        <h4>Market Cap: {profile.marketCapitalization}</h4>
      </div>
      <Chart />
      <StockStats />
      <CompanyNews />
      <Earnings earnings={earnings} />
      <Peers peers={peers} />
    </>
  );
};

export default ViewPage;
