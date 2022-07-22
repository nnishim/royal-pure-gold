import styled from "styled-components";

export const TableItemSC = styled.div`
  width: 945px;
  background: #1d1d1d;
  box-shadow: 0px 247px 99px rgba(0, 0, 0, 0.01),
  0px 139px 83px rgba(0, 0, 0, 0.05), 0px 62px 62px rgba(0, 0, 0, 0.09),
  0px 15px 34px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  padding: 0 20px 20px 20px;
  border-radius: 10px;
  position: relative;
`;
export const TableCol = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${(props) => (props.right ? "65px" : "0")};
  margin-bottom: 20px;
  transition: 0.3s ease-in-out;
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
  margin-bottom: 26px;
`;
export const TableColTitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  color: #f5f5f5;
  flex: 0 1 16.666%;
`;
export const TableColText = styled.span`
  flex: ${(props) =>
          props.notFlex ? 'none' : "0 1 16.666%"};
  font-weight: 400;
  font-size: 16px;
  color: ${(props) =>
          props.green ? "#23E798" : props.red ? "#FF2F2F" : "#f5f5f5f5"};
  text-transform: ${(props) => (props.up ? "uppercase" : "none")};
  display: flex;
  align-items: center;
`;
export const TableColImg = styled.img``;
export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.active ? '1' : '0')};
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  transition: .4s ease-in-out;
  z-index: 101;
`;
