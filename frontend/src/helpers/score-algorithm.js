export const scoreAlgorithm = (data) => {
  let scoresArray = []
  let score = 0;
  data.forEach((company) => {
    scoresArray.push(company.overall_sentiment_score)
  });

  score = scoresArray.reduce((a, b) => a + b, 0) / scoresArray.length;
  return score;




}
