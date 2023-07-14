// import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Grid from "../components/Grid";

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

  return (
    <>
      <Navbar />
      <Grid>
        <div className="gridItem">
            <h1>hello world</h1>
        </div>
        <div className="gridItem">
            <h1>hello other world</h1>
        </div>
        <div className="gridItem">
          <h1>third times</h1>
        </div>

      </Grid>
    </>
  );
};

export default HomePage;
