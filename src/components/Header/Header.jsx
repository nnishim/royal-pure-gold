import React from "react";
import { Container } from "../../uikit/ContainerSC";
import {
  HeaderContent,
  HeaderContentLeft,
  HeaderContentRight,
  HeaderLangBlock,
  HeaderLangIcon,
  HeaderLogo,
  HeaderLogoBlock,
  HeaderNavbar,
  HeaderNavbarIButton,
  HeaderNavbarIcon,
  HeaderNavbarLink,
  HeaderNavbarLinkBlock,
  HeaderSC,
  HeaderUserBlock,
  HeaderUserIBlock,
  HeaderUserImg,
  HeaderUserName,
} from "./HeaderSC";

function Header() {
  return (
    <>
      <HeaderSC>
        <Container>
          <HeaderContent>
            <HeaderContentLeft>
              <HeaderLogoBlock>
                <HeaderLogo src="./images/logo.png" />
              </HeaderLogoBlock>
              <HeaderNavbar>
                <HeaderNavbarLink href="#">
                  Обучение
                  <HeaderNavbarIcon src="./images/arrow-bottom.svg" />
                </HeaderNavbarLink>
                <HeaderNavbarLink href="#">
                  Лицензии
                  <HeaderNavbarIcon src="./images/arrow-bottom.svg" />
                </HeaderNavbarLink>
              </HeaderNavbar>
            </HeaderContentLeft>
            <HeaderContentRight>
              <HeaderLangBlock>
                <HeaderLangIcon src="./images/en-lang.svg" />
                <HeaderNavbarIcon src="./images/arrow-bottom.svg" />
              </HeaderLangBlock>
              <HeaderUserBlock>
                <HeaderUserName>Екатерина</HeaderUserName>
                <HeaderUserIBlock>
                  <HeaderUserImg src="./images/user-img.png" />
                  <HeaderNavbarIcon src="./images/arrow-bottom.svg" />
                </HeaderUserIBlock>
              </HeaderUserBlock>
            </HeaderContentRight>
          </HeaderContent>
        </Container>
      </HeaderSC>
    </>
  );
}

export default Header;
