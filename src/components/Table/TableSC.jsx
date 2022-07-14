import styled from "styled-components";

export const TableSC = styled.div`
  margin-bottom: 40px;
`;
export const TableContent = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const TableRightMenu = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 50px;
  width: 140px;
  margin-right: 90px;
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
  align-items: flex-end;
  flex-direction: column;
  row-gap: 50px;
  margin-left: 160px;
  align-self: center;
`;
export const TableLeftLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  :hover span{
    opacity: 1;
  }
`;
export const TableLeftImg = styled.svg`
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: ${(props) => (props.active ? "#E9DC3B" : "#f5f5f5")};
  :hover {
    color: #e9dc3b;
  }
`;
export const Tooltip = styled.span`
  color: #e9dc3b;
  font-weight: 400;
  font-size: 16px;
  opacity: 0;
  transition: .3s ease-in-out;
`;
