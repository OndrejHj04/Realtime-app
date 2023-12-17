import styled from "styled-components";
import Cell from "./Cell";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Plan = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  width: 70vmin;
  height: 70vmin;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default function GamePlan() {
  return (
    <Container>
      <Plan>
        <Grid>
          {Array.from({ length: 9 }).map((_, i) => (
            <Cell index={i} />
          ))}
        </Grid>
      </Plan>
    </Container>
  );
}
