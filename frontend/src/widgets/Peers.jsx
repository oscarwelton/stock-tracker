const peers = ({peers}) => {
  return (
    <div className="peers">
      {peers.map((peer, index) => (
        <div className="peer" key={index}>
          <p>{peer.symbol}</p>
          <p>{peer.quote.c} {peer.quote.dp}%</p>
        </div>
      ))}
    </div>
  );
};

export default peers;
