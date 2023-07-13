import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`http://localhost:5000/api/search/${value}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };



  return (
    <>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="searchResults"></div>
    </>
  );
};

export default SearchBar;
