import styled from "styled-components";

const Container = styled.div`
  margin: 1rem auto;
  display: flex;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 0rem;
  border: 1px solid #ccc;
  border-right: 0rem;
  border-radius: 1rem 0 0 1rem;
  font-size: 1.5rem;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
  text-align: center;
`;

const Button = styled.button`
  border: 0rem;
  font-size: 1.2rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0 1rem 1rem 0;
  border: 1px solid #ccc;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
  border-left: 0rem;
`;

export default function InputContainer() {
  return (
    <div style={{ display: "flex" }}>
      <Container>
        <Input type="text" placeholder="Zadejte kód hry" />
        <Button type="submit">Připojit se</Button>
      </Container>
    </div>
  );
}
