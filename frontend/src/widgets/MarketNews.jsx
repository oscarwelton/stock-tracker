import { useState } from "react";

const MarketNews = () => {
  const [stories, setStories] = useState([]);

  fetch("http://localhost:3001/market-news")
    .then((res) => res.json())
    .then((json) => setStories(json));

  return (
    <div className="marketNews">
      <h2>Latest News</h2>
      {stories.map((story, index) => (
        <div className="story" key={index}>
          <h3>{story.headline}</h3>
          <p>{story.summary}</p>
        </div>
      ))}
      ;
    </div>
  );
};

export default MarketNews;
