import { scoreAlgorithm } from "../helpers/score-algorithm.js";

const Sentiment = (props) => {

  const sentimentScore = scoreAlgorithm(props);

  return (
    <>
    <button>i</button>
      <h2>Market Sentiment: {sentimentScore.status}</h2>
      <h2>Sentiment Score: {sentimentScore.score.toFixed(5)}</h2>
    </>
  );
};

export default Sentiment;

// relevance_score_definition
// "0 < x <= 1, with a higher score indicating higher relevance."
// sentiment_score_definition
// "x <= -0.35: Bearish; -0.35 < x <= -0.15: Somewhat-Bearish; -0.15 < x < 0.15:
// Neutral; 0.15 <= x < 0.35: Somewhat_Bullish; x >= 0.35: Bullish"
