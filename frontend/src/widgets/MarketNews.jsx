import React, { useState, useEffect } from "react";

const MarketNews = () => {
  const [stories, setStories] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  useEffect(() => {
    fetch("http://localhost:3001/market-news")
      .then((res) => res.json())
      .then((data) => {
        const slicedData = data.slice(start, end);
        setStories(slicedData);
      })
      .catch((error) => {
        console.error("Error fetching market news:", error);
      });
  }, [start, end]);

  function removeColon(headline) {
    if (headline.startsWith(":")) {
      return headline.substring(1).trim();
    }
    return headline;
  }

  const handleNext = (e) => {
    setStart((prevStart) => prevStart + 5);
    setEnd((prevEnd) => prevEnd + 5);
  };

  const handleBack = (e) => {
    setStart((prevStart) => prevStart - 5);
    setEnd((prevEnd) => prevEnd - 5);
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
      {stories.map((story, index) => (
        <div className="story" key={index}>
          <img src={story.image} alt={story.headline} />
          <div className="story-content">
            <h3>{removeColon(story.headline)}</h3>
            <p>{story.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketNews;
