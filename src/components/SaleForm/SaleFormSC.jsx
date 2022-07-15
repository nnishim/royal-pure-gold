import styled from "styled-components";

export const SaleFormSC = styled.div`
  min-height: 100vh;
  max-width: 480px;
  padding: 55px 40px;
  background: #2e2e2e;
  border-radius: 30px 0px 0px 30px;
  position: absolute;
  right: 0;
  top: 0;
`;
export const FormButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 130px;
`;
export const FormButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const FormButton = styled.a`
  font-weight: 600;
  font-size: 16px;
  padding: 10px 66px;
  border-radius: 10px;
  color: ${(props) => (props.active ? "#000" : "#f5f5f5")};
  cursor: pointer;
  transition: 0.3s ease-in-out;
  background: ${(props) => (props.active ? "#E9DC3B" : "transparent")};
  border: 1px solid ${(props) => (props.active ? "#E9DC3B" : "#f5f5f5;")};
  :hover {
    background: #e9dc3b;
    border-color: #e9dc3b;
    color: #000;
  }
  :hover > .form-span{
    color: #e9dc3b;
  }
`;
export const FormButtonBottom = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.active ? '#e9dc3b' : '#F5F5F5'};
  transition: .3s ease-in-out;
`;
