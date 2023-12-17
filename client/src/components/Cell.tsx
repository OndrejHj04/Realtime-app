import styled from "styled-components";

const borderMap = [
  "0",
  "0 1px",
  "0",
  "1px 0",
  "1px",
  "1px 0",
  "0",
  "0 1px",
  "0",
];

const StyledCell = styled.div<{ index: number }>`
  border: solid #ccc;
  border-width: ${({ index }) => borderMap[index]};
  padding: 1rem;
  cursor: pointer;
`;

export default function Cell({ index }: { index: number }) {
  return <StyledCell index={index} />;
}
