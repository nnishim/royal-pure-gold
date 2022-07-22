import styled from "styled-components";

export const TableSC = styled.div`
  margin-bottom: 40px;
`;
export const TableContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const TableRightMenu = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 50px;
  width: 140px;
`;
export const TableRightLink = styled.a`
  font-weight: ${(props) => (props.active ? "700" : "400")};
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: ${(props) => (props.active ? "#E9DC3B" : "#f5f5f5")};
  :hover {
    color: #e9dc3b;
  }
`;
export const TableLeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  position: relative;
  z-index: 100;
  margin-top: 105px;
`;
export const TableLeftLink = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  background: transparent;
  cursor: pointer;
  :hover span{
    opacity: 1;
  }
`;
export const Tooltip = styled.span`
  color: #e9dc3b;
  font-weight: 400;
  font-size: 16px;
  opacity: 0;
  transition: .3s ease-in-out;
`;
export const Icon = styled.img`
  :hover {
    fill: #e9dc3b;
  }
`;

