import { convertUnixToDate } from "helpers/date-helper";
import { useLocation } from "react-router-dom";
import { filterNews } from "helpers/news-filter";
import { socialSentiment } from "helpers/news-filter";

const CompanyNews = (props) => {
  const location = useLocation();
  const newsArray = props["news"]
  const symbol = location.state.symbol
  const news = filterNews(symbol, newsArray)
  console.log(news)

  const convertDate = (unix) => {
    const date = convertUnixToDate(unix).toDateString();
    return date;
  };

  return (
    <>
      <h2 className="company-headlines-header">
        Latest Headlines - {symbol}
      </h2>
      <div className="news">
        {news.map((story, index) => (
          <div className="company-news-story" key={index}>
            <p>
              {convertDate(story.time_published)} {story.source}
            </p>
            <img className="story-image" src={story.banner_image} alt="" />
            <div className="company-news-header">
            </div>
            <div className="story-content">
              <h3>{story.title}</h3>
              <p>{story.summary}</p>
              <a href={story.url} target="_blank" rel="noreferrer">
                View article
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompanyNews;
