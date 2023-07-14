import FlexBetween from "components/FlexBetween";
import SearchBar from "components/SearchBar";

const Navbar = () => {
  return (
    <FlexBetween className="Navbar">
          <h1>Stocker</h1>
          <SearchBar />
    </FlexBetween>
  );
};

export default Navbar;
