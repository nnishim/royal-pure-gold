import styled from "styled-components";

export const NewsMenuSC = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-direction: column;
`;
export const NewsMenuItem = styled.div`
  background: #1d1d1d;
  border-radius: 10px;
  max-width: 370px;
  padding: 25px 10px;
`;
export const NewsMenuItemDesc = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: calc(20px / 24px * 100%);
  color: #f5f5f5;
  margin-bottom: 10px;
`;
export const NewsMenuItemBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NewsMenuItemlink = styled.a`
  font-weight: 400;
  font-size: 14px;
  color: #e9dc3b;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
export const NewsMenuItemDate = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #f5f5f5;
`;
