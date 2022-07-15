import styled from "styled-components";

export const DiagramSC = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: #1d1d1d;
  box-shadow: 0px 265px 106px rgba(0, 0, 0, 0.02),
    0px 149px 89px rgba(0, 0, 0, 0.06), 0px 66px 66px rgba(0, 0, 0, 0.1),
    0px 17px 36px rgba(0, 0, 0, 0.12), 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 30px 80px;
`;
export const DiagramTitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  color: #f5f5f5;
  text-align: center;
  margin-bottom: 30px;
`;
export const DiagramTop = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  max-width: 650px;
  margin: 0 auto;
`
export const DiagramYears = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  ::after {
    display: ${(props) => (props.borderBottom ? "block" : "none")};
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #f5f5f5;
    margin-bottom: -10px;
  }
`;
export const DiagramYear = styled.div`
  font-weight: 400;
  font-size: 24px;
  color: #f5f5f5;
`;
export const DiagramNum = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #e9dc3b;
`;
