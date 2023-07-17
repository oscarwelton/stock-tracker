const peers = (props) => {
  return (
    <div className="peers">
      <h3>Competitors:</h3>
      {props.peers.map((peer, index) => (
        <div className="peer" key={index}>
          <p>{peer}</p>
        </div>
      ))}
    </div>
  );
};

export default peers;
