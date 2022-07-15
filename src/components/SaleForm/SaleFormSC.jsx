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
  :hover > .form-span {
    color: #e9dc3b;
  }
`;
export const FormButtonBottom = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => (props.active ? "#e9dc3b" : "#F5F5F5")};
  transition: 0.3s ease-in-out;
`;
export const FormPrice = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #f5f5f5;
  display: flex;
  align-content: center;
  gap: 15px;
  margin-bottom: 50px;
`;
export const FormPriceNum = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #e9dc3b;
`;
export const FormInputFields = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 325px;
  gap: 20px;
`;
export const FormInputBlock = styled.div`
  position: relative;
  width: 100%;
`;
export const FormInputField = styled.input`
  background: #1d1d1d;
  border-radius: 10px;
  border: none;
  width: 100%;
  padding: 15px 10px;
  color: #f5f5f5;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #f5f5f5;
  }
`;
export const FormInputSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #f5f5f5;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  text-transform: uppercase;
`;
export const FormButtonSubmit = styled.button`
  background: #e9dc3b;
  border-radius: 10px;
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  color: #1d1d1d;
  padding: 10px 40px;
  cursor: pointer;
  border: 1px solid #e9dc3b;
  transition: 0.3s ease-in-out;
  :hover {
    background: transparent;
    color: #e9dc3b;
  }
`;
