import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`http://localhost:3001/${value}`, { methd: "GET" })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    // fetchData(value);
  };

  const getStocks = () => {
    fetch("http://localhost:3001/stocks", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
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
      <div className="searchResults"></div>
    </>
  );
};

export default SearchBar;
