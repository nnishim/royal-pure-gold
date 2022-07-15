import React from "react";
import { useState } from "react";
import {
  FormButton,
  FormButtonBlock,
  FormButtonBottom,
  FormButtons,
  SaleFormSC,
} from "./SaleFormSC";

function SaleForm() {
  const [buttons, setButtons] = useState([
    { id: 1, name: "Купить", text: "Лимит", isActive: false },
    { id: 2, name: "Продать", text: "Маркет", isActive: false },
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
      <SaleFormSC>
        <FormButtons>
          {buttons.map((button) => {
            return(
              <FormButtonBlock key={button.id}>
                <FormButton
                  active={button.isActive}
                  onClick={() => toggleActiveButton(button.id)}
                >
                  {button.name}
                </FormButton>
                <FormButtonBottom className="form-span" active={button.isActive}>{button.text}</FormButtonBottom>
              </FormButtonBlock>
            )
          })}
        </FormButtons>
      </SaleFormSC>
    </>
  );
}

export default SaleForm;
