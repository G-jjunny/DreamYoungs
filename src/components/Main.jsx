import styled from "styled-components";
import InfoForm from "./InfoForm";

const MainContainer = styled.div`
  width: 100%;
  padding: 0 40px 0 40px;
  .title {
    margin: 32px 0 32px 0;
  }
`;

// main컴포넌트
function Main({ formattedInfoData }) {
  return (
    <MainContainer>
      <h1 className="title">타이틀</h1>
      <InfoForm formattedInfoData={formattedInfoData} />
    </MainContainer>
  );
}

export default Main;
