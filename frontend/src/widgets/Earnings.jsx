const Earnings = (props) => {
  return (
    <div className="earnings">
      {props.earnings.map((earning, index) => (
        <div className="earning" key={index}>
          <p>Q{earning.quarter} - {new Date(earning.period).getFullYear()}</p>
          <p>Actual: {earning.actual}</p>
          <p>Esitmated: {earning.estimate}</p>
          <p>
            Surprise: {earning.surprise} ({earning.surprisePercent}%)
          </p>
        </div>
      ))}
    </div>
  );
};

export default Earnings;
