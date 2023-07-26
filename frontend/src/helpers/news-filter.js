export const filterNews = (news) => {
  return news.filter((item) => {
    const titleContainsBarrons = item.title.toLowerCase().includes("barrons");
    const sourceContainsBarrons = item.source.toLowerCase().includes("barrons");
    return !titleContainsBarrons && !sourceContainsBarrons;
  });
};
