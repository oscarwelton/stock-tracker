import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import StockGraph from '../widgets/StockGraph';
import StockStats from '../widgets/StockStats';
import CompanyNews from '../widgets/CompanyNews';

const ViewPage = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <>
      <Navbar />
      <h1>This is a View Page</h1>
      <h1>{location.state.description}</h1>
    </>
  );
};

export default ViewPage;
