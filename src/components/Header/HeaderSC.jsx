import styled from "styled-components";

export const HeaderSC = styled.header`
  margin-bottom: 45px;
`;
export const HeaderLogoBlock = styled.div`
  max-width: 52px;
`;
export const HeaderLogo = styled.img`
  width: 100%;
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`;
export const HeaderContentLeft = styled.div`
  display: flex;
  gap: 63px;
  align-items: center;
`;
export const HeaderContentRight = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
`;
export const HeaderNavbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 75px;
`;
export const HeaderNavbarLink = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #f5f5f5;
  background: transparent;
  border: none;
  cursor: pointer;
`;
export const HeaderNavbarIButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
`;
export const HeaderNavbarIcon = styled.img`
  transform: ${(props) => (props.opened ? "rotate(180deg)" : "none")};
  transition: 0.3s ease-in-out;
`;
export const HeaderLangBlock = styled.div`
  position: relative;
`;
export const HeaderLangButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const HeaderLangIcon = styled.img`
  width: 100%;
  height: 100%;
`;
export const HeaderLangRus = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: -30px;
  left: 0;
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 5px;
`;
export const HeaderUserBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
`;
export const HeaderUserIBlock = styled.div`
  max-width: 50px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const HeaderUserImg = styled.img`
  width: 100%;
`;
export const HeaderUserName = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #f5f5f5;
`;
export const HeaderUserMenu = styled.div`
  background-color: #2e2e2e;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: -95px;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
`;
export const HeaderDropdown = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
`;
export const HeaderDropdownMenu = styled.div`
  background-color: #2e2e2e;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: -135px;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
`;
export const HeaderDropdownLink = styled.a`
  font-size: 16px;
  color: #f5f5f5;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  padding: 10px;
  width: 100%;
  :hover {
    background-color: #f1bc46;
  }
`;
