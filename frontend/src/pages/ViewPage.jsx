import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import StockGraph from "../widgets/StockGraph";
import StockStats from "../widgets/StockStats";
import CompanyNews from "../widgets/CompanyNews";
import { useEffect } from "react";

const ViewPage = () => {
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(`http://localhost:3001/${location.state.symbol}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [location.state.symbol]);

  return (
    <>
      <Navbar />
      <h1>This is a View Page</h1>
      <StockGraph />
      <StockStats />
      <CompanyNews />
      <h1>{location.state.description}</h1>
    </>
  );
};

export default ViewPage;
