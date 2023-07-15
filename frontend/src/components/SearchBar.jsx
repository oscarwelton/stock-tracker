import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import FlexBetween from "./FlexBetween";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = async (value) => {
    fetch(`http://localhost:3001/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    })
      .then((res) => res.json())
      .then((json) => setResults(json));
  };

  const handleChange = async (value) => {
    setInput(value);
    if (value.length > 1) {
      await fetchData(value);
    } else {
      setResults([]);
    }
  };

  return (
    <>
      <div className="searchWidget">
        <div className="searchBar">
          <FaSearch id="searchIcon" />
          <input
            type="text"
            placeholder="Search for a stock"
            value={input}
            onClick={(e) => handleChange(e.target.value)}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        {results.length > 0 && (
          <div className="searchResults">
            {results.map((result, index) => (
              <div className="searchResult" key={result.displaySymbol}>
                <FlexBetween>
                  <p>Symbol: {result.displaySymbol}</p>
                  <p>Company: {result.description}</p>
                </FlexBetween>
                <FlexBetween>
                  <p>Current Price: {result.currentPrice}</p>
                  <p>Percentage Change: {result.percentChange} %</p>
                </FlexBetween>
                <button onClick={() => navigate(`/${result.displaySymbol}`, {state: result})}>View</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
