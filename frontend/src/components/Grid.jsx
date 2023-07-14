import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Grid = styled(Box)({
  height: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1rem",
});

export default Grid;
