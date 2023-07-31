export const scoreAlgorithm = (data) => {
  let scoresArray = []
  let x = 0;
  let status = "";

  data.news.forEach((company) => {
    scoresArray.push(company.overall_sentiment_score)
  });

  x = scoresArray.reduce((a, b) => a + b, 0) / scoresArray.length;

  if (x <= -0.35) {
    status = "Bearish"
  } else if (x > -0.35 && x <= -0.15) {
    status = "Somewhat Bearish"
  } else if (x > -0.15 && x < 0.15) {
    status = "Neutral"
  } else if (x >= 0.15 && x < 0.35) {
    status = "Somewhat Bullish"
  } else
    status = "Bullish"


  return {score: x, status: status}
}
