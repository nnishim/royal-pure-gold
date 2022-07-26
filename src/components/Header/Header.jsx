import React, {useEffect, useRef, useState} from "react";
import {Container} from "../../uikit/ContainerSC";
import {motion, AnimatePresence} from "framer-motion";
import ClickAwayListener from '@mui/material/ClickAwayListener';

import {
  HeaderContent,
  HeaderContentLeft,
  HeaderContentRight,
  HeaderDropdown,
  HeaderDropdownLink,
  HeaderDropdownMenu,
  HeaderLangBlock,
  HeaderLangButton,
  HeaderLangIcon,
  HeaderLangRus,
  HeaderLogo,
  HeaderLogoBlock,
  HeaderNavbar,
  HeaderNavbarIcon,
  HeaderNavbarLink,
  HeaderSC,
  HeaderUserBlock,
  HeaderUserIBlock,
  HeaderUserImg,
  HeaderUserMenu,
  HeaderUserName,
} from "./HeaderSC";

function Header() {
  const [openEducation, setOpenEducation] = useState(false);
  const [openLicenses, setOpenLicenses] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const variants = {
    open: {opacity: 1, y: 0}, closed: {opacity: 0, y: 0},
  };
  const handleClickAwayEd = () => {
    setOpenEducation(false);
  };
  const handleClickAwayLc = () => {
    setOpenLicenses(false);
  };
  const handleClickAwayLn = () => {
    setOpenLang(false);
  };
  const handleClickAwayPf = () => {
    setOpenProfile(false);
  };

  return (<>
    <HeaderSC>
      <Container>
        <HeaderContent>
          <HeaderContentLeft>
            <HeaderLogoBlock>
              <HeaderLogo src="./images/logo.png"/>
            </HeaderLogoBlock>
            <HeaderNavbar>
              <ClickAwayListener onClickAway={handleClickAwayEd}>
                <HeaderDropdown>
                  <HeaderNavbarLink
                    onClick={() => setOpenEducation(!openEducation)}
                  >
                    Обучение
                    {openEducation ? (<HeaderNavbarIcon
                      src="./images/arrow-bottom.svg"
                      opened
                    />) : (<HeaderNavbarIcon src="./images/arrow-bottom.svg"/>)}
                  </HeaderNavbarLink>
                  <AnimatePresence initial={false}>
                    {openEducation && (<HeaderDropdownMenu
                      initial={"closed"}
                      as={motion.div}
                      animate={"open"}
                      exit={"closed"}
                      variants={variants}
                      transition={{duration: 0.2}}
                    >
                      <HeaderDropdownLink>Обучение</HeaderDropdownLink>
                      <HeaderDropdownLink>Обучение</HeaderDropdownLink>
                      <HeaderDropdownLink>Обучение</HeaderDropdownLink>
                    </HeaderDropdownMenu>)}
                  </AnimatePresence>
                </HeaderDropdown>
              </ClickAwayListener>
              <ClickAwayListener onClickAway={handleClickAwayLc}>
                <HeaderDropdown>
                  <HeaderNavbarLink
                    onClick={() => setOpenLicenses(!openLicenses)}
                  >
                    Лицензии
                    {openLicenses ? (<HeaderNavbarIcon
                      src="./images/arrow-bottom.svg"
                      opened
                    />) : (<HeaderNavbarIcon src="./images/arrow-bottom.svg"/>)}
                  </HeaderNavbarLink>
                  <AnimatePresence initial={false}>
                    {openLicenses && (<HeaderDropdownMenu
                      initial={"closed"}
                      as={motion.div}
                      animate={"open"}
                      exit={"closed"}
                      variants={variants}
                      transition={{duration: 0.2}}
                    >
                      <HeaderDropdownLink>Лицензии</HeaderDropdownLink>
                      <HeaderDropdownLink>Лицензии</HeaderDropdownLink>
                      <HeaderDropdownLink>Лицензии</HeaderDropdownLink>
                    </HeaderDropdownMenu>)}
                  </AnimatePresence>
                </HeaderDropdown>
              </ClickAwayListener>
            </HeaderNavbar>
          </HeaderContentLeft>
          <HeaderContentRight>
            <ClickAwayListener onClickAway={handleClickAwayLn}>
              <HeaderLangBlock>
                <HeaderLangButton onClick={() => setOpenLang(!openLang)}>
                  <HeaderLangIcon src="./images/en-lang.svg"/>
                  {openLang ? (<HeaderNavbarIcon src="./images/arrow-bottom.svg" opened/>) : (
                    <HeaderNavbarIcon src="./images/arrow-bottom.svg"/>)}
                </HeaderLangButton>
                <AnimatePresence initial={false}>
                  {openLang && (<HeaderLangRus
                    initial={"closed"}
                    as={motion.div}
                    animate={"open"}
                    exit={"closed"}
                    variants={variants}
                    transition={{duration: 0.2}}
                  >
                    <HeaderLangIcon src="./images/russia.png"/>
                  </HeaderLangRus>)}
                </AnimatePresence>
              </HeaderLangBlock>
            </ClickAwayListener>
            <ClickAwayListener onClickAway={handleClickAwayPf}>
              <HeaderUserBlock onClick={() => setOpenProfile(!openProfile)}>
                <HeaderUserName>Екатерина</HeaderUserName>
                <HeaderUserIBlock>
                  <HeaderUserImg src="./images/user-img.png"/>
                </HeaderUserIBlock>
                {openProfile ? (<HeaderNavbarIcon src="./images/arrow-bottom.svg" opened/>) : (
                  <HeaderNavbarIcon src="./images/arrow-bottom.svg"/>)}
                <AnimatePresence initial={false}>
                  {openProfile && (<HeaderUserMenu
                    initial={"closed"}
                    as={motion.div}
                    animate={"open"}
                    exit={"closed"}
                    variants={variants}
                    transition={{duration: 0.2}}
                  >
                    <HeaderDropdownLink>Сменить аккаунт</HeaderDropdownLink>
                    <HeaderDropdownLink>Выйти</HeaderDropdownLink>
                  </HeaderUserMenu>)}
                </AnimatePresence>
              </HeaderUserBlock>
            </ClickAwayListener>
          </HeaderContentRight>
        </HeaderContent>
      </Container>
    </HeaderSC>
  </>);
}

export default Header;
