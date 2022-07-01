import styled from "styled-components";

export const TableSC = styled.div``;
export const TableContent = styled.div``;
export const TableRightMenu = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 50px;
`;
export const TableRightLink = styled.a`
  font-weight: ${(props) => (
    props.active ? "700" : "400")};
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: ${(props) => (props.active ? "#E9DC3B" : "#f5f5f5")};
  :hover {
    color: #e9dc3b;
  }
`;
