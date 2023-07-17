const CompanyNews = (props) => {

  return (
    <div className="news">
      <h2>Headlines</h2>
      {props.news.map((story, index) => (
        <div className="story" key={index}>
          <img src={story.image} alt={story.headline} />
          <div className="story-content">
            <h3>{story.headline}</h3>
            <p>{story.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyNews;
