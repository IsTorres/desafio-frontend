import { ApresentationDiv, Box } from "./styles";
import marvel from "../../assets/marvel.jpeg";

export default function Apresentation() {
  return (
    <ApresentationDiv style={{ backgroundImage: `url(${marvel})` }}>
      <Box>
        <h1>Build your collection here!</h1>
      </Box>
    </ApresentationDiv>
  );
}
