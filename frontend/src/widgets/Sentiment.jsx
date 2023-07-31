import { scoreAlgorithm } from "../helpers/score-algorithm.js";

const Sentiment = (props) => {
  const sentimentScore = scoreAlgorithm(props);

  return (
    <>
      <h2>
        Market Sentiment: {sentimentScore.status}
        <button>i</button>
      </h2>
      <h2>Sentiment Score: {sentimentScore.score.toFixed(5)}</h2>
    </>
  );
};

export default Sentiment;
