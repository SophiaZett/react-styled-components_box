import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import StyledBox from "../components/BoxWithStyledComponents/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <div style={{ display: "flex" }}>
      <BoxWithClassName isBlack={false} />
      <BoxWithClassName isBlack={true} />
      <StyledBox $isBlack={false} />
      <StyledBox $isBlack={true} />
    </div>
  );
}
