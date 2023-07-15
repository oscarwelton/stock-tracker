// import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "../components/Banner";
import MarketNews from "../widgets/MarketNews";
import Headlines from "../widgets/Headlines";

const HomePage = () => {
  // useEffect(() => {
  //  fetch('http://localhost:3001/generate-jwt')
  //     .then((res) => {
  //       const token = res.json();
  //       console.log(token);
  //       document.cookie = `token=${token}`
  //     })
  //     .catch((error) => {
  //       console.error('Failed to generate JWT:', error);
  //     });
  // });



  fetch("http://localhost:3001/")
    .then((res) => res.json())
    .then((json) => console.log(json));

  return (
    <>
      <Navbar />
      <Banner />

      <div style={{ display: "flex" }}>
        <div style={{ flex: 2 }}><MarketNews /></div>
        <div style={{ flex: 1 }}><Headlines /></div>
      </div>

    </>
  );
};

export default HomePage;
