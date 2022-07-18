import styled from "styled-components";

export const BankingTopUpSC = styled.div``;
export const BankingTopUpTitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  color: #f5f5f5;
  margin-left: 5px;
  margin-bottom: 50px;
`;
export const BankingTopUpList = styled.ul`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 35px;
  padding: 0 0 0 20px;
  list-style: disc;
  margin-bottom: 65px;
`;
export const BankingTopUpItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  color: #f5f5f5;
  line-height: calc(14px / 17px * 100%);
`;
export const BankingTopUpItemYellow = styled.span`
  color: #e9dc3b;
  border-bottom: ${(props) => (props.line ? "1px solid #E9DC3B" : "none")};
`;
export const BankingTopUpButton = styled.a`
  font-weight: 600;
  font-size: 16px;
  color: #e9dc3b;
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
`;
export const BankingTopUpIcon = styled.img`
`;
