import { convertUnixToDate } from "helpers/date-helper";

const CompanyNews = (props) => {


  const convertDate = (unix) => {
    const date =  convertUnixToDate(unix).toDateString();
    return date;
  };

  return (
    <div className="news">
      <h2>Latest Headlines {props.symbol}</h2>
      {props.news.map((story, index) => (
        <div className="company-news-story" key={index}>
          <div className="company-news-header">
            {/* <img src={story.image} alt={story.headline} /> */}
            <h3>
              {story.headline}
            </h3>
          </div>
          <div className="story-content">
            <p>{convertDate(story.datetime)} {story.source}</p>
            <p>{story.summary}</p>
            <a href={story.url} target="_blank" rel="noreferrer">View article</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyNews;
