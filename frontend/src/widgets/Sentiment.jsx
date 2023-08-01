import { scoreAlgorithm } from "../helpers/score-algorithm.js";
import { useState } from "react";

const Sentiment = (props) => {
  const [isShown, setIsShown] = useState(false);
  const sentimentScore = scoreAlgorithm(props);

  return (
    <>
      <div className="sentiment">
        <button onClick={() => setIsShown(true)}>i</button>
        <h2>Market Sentiment: <span>{sentimentScore.status}</span></h2>
        <h2>Sentiment Score: <span>{sentimentScore.score.toFixed(5)}</span></h2>
      </div>

      {isShown && (
        <div className="sentiment-info">
          <button onClick={() => setIsShown(false)}>X</button>
          <h4>What is sentiment?</h4>
          <p>
            A sentiment score of an news article is calculated by the number of
            positive words minus the number of negative words divided by the
            total number of words in the article.
          </p>
          <p>
            The given sentiment score is a reflection of all articles in the
            past 30 days.
          </p>
          <ul>
            <li>Bullish: </li>
            <li>Somewhat Bullish:</li>
            <li>Neutral: </li>
            <li>Somewhat Bearish: </li>
            <li>Bearish: </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sentiment;
