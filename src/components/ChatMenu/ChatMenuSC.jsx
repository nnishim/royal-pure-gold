import styled from "styled-components";

export const ChatMenuSC = styled.div`
  position: relative;
  max-width: 343px;
  height: 100%;
`
export const ChatMenuLogoBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-bottom: 85px;
`
export const ChatMenuLogo = styled.img`
`
export const ChatMenuLogoText = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: calc(20 / 24 * 100%);
  color: #F5F5F5;
`
export const ChatMenuMessage = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  background: #494949;
  border-radius: 10px 10px 0 10px;
  padding: 11px 16px;
  max-width: ${(props) => (props.width ? '336px' : '100px')};
  margin-left: auto;
  margin-bottom: 20px;
`
export const ChatMenuEmployeeMessage = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  background: #1D1D1D;
  border-radius: 10px 10px 10px 0;
  max-width: 265px;
  margin-right: auto;
  padding: 11px 10px;
  margin-bottom: 20px;
`
export const ChatMenuEmployeeLink = styled.a`
  color: #E9DC3B;
  cursor: pointer;
  border-bottom: 1px solid #E9DC3B;
`
export const ChatMenuInputField = styled.input`
  color: #f5f5f5;
  background: #1D1D1D;
  border-radius: 0 0 0 30px;
  padding: 18px;
  border: none;
  width: 450px;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #757575;
  }
`
export const ChatMenuField = styled.div`
  position: absolute;
  bottom: 5px;
  left: 0;
  display: flex;
  align-items: center;
`
export const ChatMenuButton = styled.button`
  border: none;
  background: #E9DC3B;
  border-radius: 10px;
  padding: 6px 30px;
  margin-left: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

