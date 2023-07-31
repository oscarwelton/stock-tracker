
import { scoreAlgorithm } from "../helpers/score-algorithm.js";


const Sentiment = (props) => {



  // console.log(scoreAlgorithm(props["news"]))



  return (
    <h2>hello world this is the sentiment score section</h2>
  )
}


export default Sentiment;


// relevance_score_definition
// "0 < x <= 1, with a higher score indicating higher relevance."
// sentiment_score_definition
// "x <= -0.35: Bearish; -0.35 < x <= -0.15: Somewhat-Bearish; -0.15 < x < 0.15:
// Neutral; 0.15 <= x < 0.35: Somewhat_Bullish; x >= 0.35: Bullish"
