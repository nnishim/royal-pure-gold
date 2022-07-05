import styled from "styled-components";

export const FooterSC = styled.footer`
  margin-bottom: 60px;
`;
export const FooterContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;
export const FooterItem = styled.div`
  background: #1d1d1d;
  box-shadow: 0px 247px 99px rgba(0, 0, 0, 0.01),
    0px 139px 83px rgba(0, 0, 0, 0.05), 0px 62px 62px rgba(0, 0, 0, 0.09),
    0px 15px 34px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  min-height: 320px;
  overflow: hidden;
`;
export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px;
  margin-bottom: 20px;
`;
export const FooterLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => (props.active ? "#000" : "#f5f5f5")};
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  background: ${(props) => (props.active ? "#E9DC3B" : "none")};
  :hover {
    background: #e9dc3b;
    color: #000;
  }
  :hover span {
    color: #000;
  }
`;
export const FooterLinkSpan = styled.span`
  font-weight: 700;
  transition: 0.3s ease-in-out;
  color: ${(props) => (props.active ? "#000" : "#e9dc3b")};
`;
export const FooterTextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 20px;
  margin-bottom: 25px;
`;
export const FooterText = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #f5f5f5;
`;

export const FooterButtons = styled.div`
  display: flex;
  align-items: center;
`;
export const FooterButton = styled.a`
  font-weight: 400;
  font-size: 16px;
  padding: 16px 45px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => (props.active ? "#000" : "#f5f5f5")};
  cursor: pointer;
  transition: 0.3s ease-in-out;
  background: ${(props) => (props.active ? "#E9DC3B" : "#2E2E2E;")};
  :hover {
    background: #e9dc3b;
    color: #000;
  }
  :hover span {
    color: #000;
  }
`;

export const FooterTable = styled.div`
  padding: 0 20px;
`;
export const FooterTableCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: ${(props) => (props.right ? "65px" : "0")};
  margin-bottom: 10px;
  transition: .3s ease-in-out;
  padding: 5px 3px;
  background: #2e2e2e;
  border-radius: 5px;
`;
