import React, { useState } from "react";
import { Container } from "../../uikit/ContainerSC";
import { TableColImg, TableColText } from "../TableItem/TableItemSC";
import { Route, Routes, Link } from "react-router-dom";
import {
  FooterItem,
  FooterSC,
  FooterLinks,
  FooterLink,
  FooterLinkSpan,
  FooterTextBlock,
  FooterText,
  FooterButtons,
  FooterContent,
  FooterButton,
  FooterTable,
  FooterTableCol,
} from "./FooterSC";
import FooterInputField from "../FooterInputField/FooterInputField";
import FooterItemText from "../FooterItemText/FooterItemText";

function Footer() {
  const [links, setLinks] = useState([
    { id: 1, name: "Мои приказы", count: 0, isActive: false },
    { id: 2, name: "Все приказы", count: 0, isActive: false },
    { id: 3, name: "Сделки", count: 1, isActive: false },
    { id: 4, name: "Депонирование ЦБ", count: 0, isActive: false },
    { id: 5, name: "Депонирование ДС", count: 0, isActive: false },
  ]);
  const [buttons, setButtons] = useState([
    { id: 1, name: "Мои активы", isActive: false },
    { id: 2, name: "Депонирование", isActive: false },
  ]);

  const toggleActive = (linkId) => {
    setLinks((links) =>
      links.map((link) =>
        linkId !== link.id
          ? { ...link, isActive: false }
          : linkId === link.id
          ? { ...link, isActive: !link.isActive }
          : link
      )
    );
  };
  const toggleActiveButton = (buttonId) => {
    setButtons((buttons) =>
      buttons.map((button) =>
        buttonId !== button.id
          ? { ...button, isActive: false }
          : buttonId === button.id
          ? { ...button, isActive: !button.isActive }
          : button
      )
    );
  };
  return (
    <>
      <FooterSC>
        <Container>
          <FooterContent>
            <FooterItem>
              <FooterLinks>
                {links.map((link) => (
                  <React.Fragment key={link.id}>
                    <FooterLink
                      active={link.isActive}
                      onClick={() => toggleActive(link.id)}
                    >
                      {link.name} -{" "}
                      <FooterLinkSpan active={link.isActive}>
                        {link.count}
                      </FooterLinkSpan>
                    </FooterLink>
                  </React.Fragment>
                ))}
              </FooterLinks>
              <FooterTextBlock>
                <FooterText>№</FooterText>
                <FooterText>Дата, время</FooterText>
                <FooterText>Тип</FooterText>
                <FooterText>Инструмент</FooterText>
                <FooterText>Количество</FooterText>
                <FooterText>Цена</FooterText>
                <FooterText>Валюта</FooterText>
              </FooterTextBlock>
            </FooterItem>
            <FooterItem>
              <FooterButtons>
                <Link to="/actives">
                  <FooterButton
                    active={buttons[0].isActive}
                    onClick={() => toggleActiveButton(buttons[0].id)}
                  >
                    {buttons[0].name}
                  </FooterButton>
                </Link>
                <Link to="/deposit">
                  <FooterButton
                    active={buttons[1].isActive}
                    onClick={() => toggleActiveButton(buttons[1].id)}
                  >
                    {buttons[1].name}
                  </FooterButton>
                </Link>
              </FooterButtons>
              <Routes>
                <Route path="actives" element={<FooterItemText />} />
                <Route path="deposit" element={<FooterInputField />} />
              </Routes>
            </FooterItem>
          </FooterContent>
        </Container>
      </FooterSC>
    </>
  );
}

export default Footer;
