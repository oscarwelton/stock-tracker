import { convertUnixToDate } from "helpers/date-helper";
import { useLocation } from "react-router-dom";

const CompanyNews = (props) => {
  const location = useLocation();
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
        {props.news.map((story, index) => (
          <div className="company-news-story" key={index}>
            <p>
              {convertDate(story.datetime)} {story.source}
            </p>
            <div className="company-news-header">
              <h3>{story.headline}</h3>
            </div>
            <div className="story-content">
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
