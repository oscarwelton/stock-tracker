import { scoreAlgorithm } from "../helpers/score-algorithm.js";
import { useState } from "react";

const Sentiment = (props) => {
  const [isShown, setIsShown] = useState(false);
  const sentimentScore = scoreAlgorithm(props);

  return (
    <>
      <div className="sentiment">
        <h2>
          Market Sentiment: {sentimentScore.status}
          <button onClick={() => setIsShown(true)}>i</button>
        </h2>
        <h2>Sentiment Score: {sentimentScore.score.toFixed(5)}</h2>
      </div>

      {isShown && (
        <div className="sentiment-info">
          <button onClick={() => setIsShown(false)}>X</button>
          <p>
            The sentiment score is calculated by the number of positive words
          </p>
        </div>
      )}
    </>
  );
};

export default Sentiment;
