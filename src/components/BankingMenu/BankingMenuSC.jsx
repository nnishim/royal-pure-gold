import styled from "styled-components";

export const BankingMenuSC = styled.div``;
export const BankingMenuButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`
export const BankingMenuButton = styled.button`
  font-weight: ${(props) => (props.active ? "600" : "400")};
  font-size: 16px;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.active ? '#E9DC3B' : '#f5f5f5')};
  color: ${(props) => (props.active ? "#000" : "#f5f5f5")};
  cursor: pointer;
  transition: 0.3s ease-in-out;
  background: ${(props) => (props.active ? "#E9DC3B" : "transparent;")};
  border-radius: 10px;
  :hover {
    background: #e9dc3b;
    border-color: #e9dc3b;
    color: #000;
  }
`;