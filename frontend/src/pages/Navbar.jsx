import FlexBetween from "components/FlexBetween";
import SearchBar from "components/SearchBar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <FlexBetween className="Navbar">
          <h1 onClick={() => navigate("/")}>Stocker</h1>
          <SearchBar />
    </FlexBetween>
  );
};

export default Navbar;
