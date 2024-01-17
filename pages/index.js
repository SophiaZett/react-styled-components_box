import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import StyledBox from "../components/BoxWithStyledComponents/BoxWithStyledComponents.js";

const StyledDiv = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <StyledDiv>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox $isBlack />
    </StyledDiv>
  );
}
