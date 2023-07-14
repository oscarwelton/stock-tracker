import FlexBetween from "components/FlexBetween";
import SearchBar from "components/SearchBar";

const Navbar = () => {
  return (
    <FlexBetween className="Navbar">
          <h3>Stocker</h3>
          <SearchBar />
    </FlexBetween>
  );
};

export default Navbar;
