import React, { useState, useEffect } from "react";

const MarketNews = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/market-news")
      .then((res) => res.json())
      .then((data) => {
        setStories(data.slice(0, 8));
      })
      .catch((error) => {
        console.error("Error fetching market news:", error);
      });
  }, []);

  return (
    <div className="marketNews">
      <h2>Latest News</h2>
      {stories.map((story, index) => (
        <div className="story" key={index}>
          <h3>{story.headline}</h3>
          <p>{story.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default MarketNews;
