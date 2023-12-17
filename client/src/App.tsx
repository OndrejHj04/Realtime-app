import Header from "./components/Header";
import InputContainer from "./components/InputContainer";
import GamePlan from "./components/GamePlan";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <InputContainer />
      <GamePlan />
    </AppContainer>
  );
}

export default App;
