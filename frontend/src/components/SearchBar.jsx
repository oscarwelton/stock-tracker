import { FaSearch } from "react-icons/fa";
import { useState, Component } from "react";
import FlexBetween from "./FlexBetween";
import { useNavigate } from "react-router-dom";
import { getPercentageColor } from "../helpers/color-helper";

function SearchBar() {
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
    if (value.length === 0) setResults([]);
    if (value.length > 1) {
      await fetchData(value);
    } else {
      setResults([]);
    }
  };

  const handleClick = (result) => {
    setResults([]);
    navigate(`/${result.displaySymbol}`, { state: result });
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
              <div
                className="searchResult"
                onClick={() => handleClick(result)}
                key={result.displaySymbol}
              >
                <p>
                  {result.description} ({result.displaySymbol}){" "}
                </p>
                <p className="result-quote">
                  {result.currentPrice}{" "}
                  <span
                    style={{
                      color: getPercentageColor(result.percentChange),
                    }}
                  >
                    ({result.percentChange}%)
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
