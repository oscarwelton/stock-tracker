import React, { useEffect } from 'react';
import Navbar from './Navbar';
import SearchBar from '../components/SearchBar';

const HomePage = () => {

  useEffect(() => {
   fetch('http://localhost:3001/generate-jwt')
      .then((res) => {
        const token = res.json();
        console.log(token);
        document.cookie = `token=${token}`
      })
      .catch((error) => {
        console.error('Failed to generate JWT:', error);
      });
  });


  return (
    <>
      <Navbar />
      <h1>Home Page</h1>
      <SearchBar />
    </>
  );
}

export default HomePage;
