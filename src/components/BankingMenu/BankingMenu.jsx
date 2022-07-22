import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { RightMenuSC } from "../../uikit/RightMenuSC";
import {
  BankingMenuButton,
  BankingMenuButtons,
  BankingMenuSC,
} from "./BankingMenuSC";
import BankingTopUp from "./BankingTopUp/BankingTopUp";


function BankingMenu() {
  const [buttons, setButtons] = useState([
    { id: 1, name: "Пополнить", href: "/top-up", isActive: false },
    { id: 2, name: "Перевод", href: "/translation", isActive: false },
    { id: 3, name: "Вывести", href: "/withdraw", isActive: false },
  ]);

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
      <RightMenuSC>
        <BankingMenuSC>
          <BankingMenuButtons>
            {buttons.map((button) => {
              return (
                // <Link key={button.id} to={button.href}>
                  <BankingMenuButton
                    key={button.id}
                    active={button.isActive}
                    onClick={() => toggleActiveButton(button.id)}
                  >
                    {button.name}
                  </BankingMenuButton>
                // </Link>
              );
            })}
          </BankingMenuButtons>
          <BankingTopUp/>
          {/*<Routes>*/}
          {/*  <Route path="/top-up" element={<BankingTopUp/>} />*/}
          {/*  <Route path="/translation" element={''} />*/}
          {/*  <Route path="/withdraw" element={''} />*/}
          {/*</Routes>*/}
        </BankingMenuSC>
      </RightMenuSC>
    </>
  );
}

export default BankingMenu;
