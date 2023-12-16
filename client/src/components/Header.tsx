import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
`;

function Header() {
  return (
    <Container>
      <H1>piškvorky</H1>
    </Container>
  );
}
export default Header;
