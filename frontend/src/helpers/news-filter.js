export const filterNews = (symbol, news) => {
  return news.filter((article) => {
    const titleContainsSymbol = article.title.toLowerCase().includes(symbol.toLowerCase());
    const summaryContainsSymbol = article.summary.toLowerCase().includes(symbol.toLowerCase());
    return titleContainsSymbol || summaryContainsSymbol;
  });
};
