import styled from "styled-components";

export const InputFieldWrap = styled.div`
  min-height: 420px;
  padding: 20px;
`;
export const InputFieldSC = styled.div`
  margin-bottom: 20px;
`;
export const InputFieldSelec = styled.select`
  border-radius: 10px;
  padding: 15px 10px;
  border: none;
  color: #fff;
  width: 100%;
  appearance: none;
  background: url("./images/arrow-bottom.svg") no-repeat right;
  background-position-x: calc(100% - 10px);
  background-color: #2e2e2e;
`;
export const InputFieldOption = styled.option`
  padding: 10px;
`;

export const InputFieldInput = styled.input`
  border-radius: 10px;
  padding: 15px 10px;
  border: none;
  color: #fff;
  width: 100%;
  background: ${(props) => (props.arrow ? 'url("./images/arrow-bottom.svg") no-repeat right' : 'none')};
  background-position-x: calc(100% - 10px);
  background-color: #2e2e2e;
  ::placeholder {
    color: #fff;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  }
`;
export const InputFieldCheckboxes = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 15px;
`;
export const FooterCheckoxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: 400;
  font-size: 16px;
  color: #f5f5f5;
  display: flex;
  align-items: center;
  gap: 13px;
`;
export const FooterCheckox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  :checked ~ span::after {
    display: block;
  }
`;
export const FooterChecmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: 3px solid #e9dc3b;
  border-radius: 3px;
  ::after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 1px;
    width: 8px;
    height: 13px;
    border: solid #e9dc3b;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
export const InputFieldBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  margin-bottom: 17px;
`;
export const InputFieldFile = styled.input`
  max-width: 165px;
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    content: "Выбрать файл";
    display: inline-block;
    background: url("./images/file-icon.svg") no-repeat left;
    background-position-x: 5px;
    background-color: #2e2e2e;
    border-radius: 10px;
    padding: 8px 8px 8px 40px;
    outline: none;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    color: #f5f5f5;
  }
`;
export const InputFieldButton = styled.a`
  font-weight: 600;
  font-size: 16px;
  color: #1d1d1d;
  width: 100%;
  background: #e9dc3b;
  border-radius: 10px;
  padding: 15px;
  display: inline-block;
  text-align: center;
  border: 1px solid #e9dc3b;
  transition: .3s ease-in-out;
  :hover{
    background: transparent;
    color: #e9dc3b;
  }
`;
