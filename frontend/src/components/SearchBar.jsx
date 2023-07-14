import { FaSearch } from "react-icons/fa";
import { useState } from "react";

let searchResults = [];

const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`http://localhost:3001/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    })
      .then((res) => res.json())
      .then((json) => {
        searchResults = json;
        console.log(searchResults);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    if (value !== "") {
      fetchData(value);
    }
  };

  return (
    <>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="searchResults">
        {searchResults.map((result) => (
          <div className="searchResult" key={result.id}>
            <p>{result.displaySymbol}</p>
            <p>{result.description}</p>
          </div>
        ))};
      </div>
    </>
  );
};

export default SearchBar;
