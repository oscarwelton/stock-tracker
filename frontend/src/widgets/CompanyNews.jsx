import { convertUnixToDate } from "helpers/date-helper";
import { useLocation } from "react-router-dom";

const CompanyNews = (props) => {
  const location = useLocation();
  console.log(props.news.feed)
  const convertDate = (unix) => {
    const date = convertUnixToDate(unix).toDateString();
    return date;
  };

  return (
    <>
      <h2 className="company-headlines-header">
        Latest Headlines - {location.state.symbol}
      </h2>
      <div className="news">
        {props.news.feed.map((story, index) => (
          <div className="company-news-story" key={index}>
            <p>
              {convertDate(story.time_published)} {story.source}
            </p>
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
