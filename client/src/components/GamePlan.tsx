import styled from "styled-components";
const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Plan = styled.div`
  width: 500px;
  height: 500px;
  background-color: #ccc;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
`;

export default function GamePlan() {
  return (
    <Container>
      <Plan>
        {Array.from({ length: 9 }).map(() => (
          <Cell />
        ))}
      </Plan>
    </Container>
  );
}
