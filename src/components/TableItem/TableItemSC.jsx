import styled from "styled-components";

export const TableItemSC = styled.div`
  width: 945px;
  background: #1d1d1d;
  box-shadow: 0px 247px 99px rgba(0, 0, 0, 0.01),
    0px 139px 83px rgba(0, 0, 0, 0.05), 0px 62px 62px rgba(0, 0, 0, 0.09),
    0px 15px 34px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  padding: 0 20px 20px 20px;
  border-radius: 10px;
`;
export const TableCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: ${(props) => (props.right ? "65px" : "0")};
  margin-bottom: 20px;
  transition: .3s ease-in-out;
  padding: 5px 3px;
  cursor: pointer;
  :hover {
    background: #2e2e2e;
    border-radius: 5px;
  }
`;
export const TableTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
`;
export const TableColTitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  color: #f5f5f5;
`;
export const TableColText = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) =>
    props.green ? "#23E798" : props.red ? "#FF2F2F" : "#f5f5f5f5"};
  text-transform: ${(props) => (props.up ? "uppercase" : "none")};
  display: flex;
  align-items: center;
`;
export const TableColImg = styled.img``;
