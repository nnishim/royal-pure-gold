import React from "react";
import { useState } from "react";
import { RightMenuSC } from "../../uikit/RightMenuSC";
import {
  FormButton,
  FormButtonBlock,
  FormButtonBottom,
  FormButtons,
  FormButtonSubmit,
  FormInputBlock,
  FormInputField,
  FormInputFields,
  FormInputSpan,
  FormPrice,
  FormPriceNum,
  SaleFormSC,
} from "./SaleFormSC";

function SaleForm() {
  const [buttons, setButtons] = useState([
    { id: 1, name: "Купить", text: "Лимит", isActive: false },
    { id: 2, name: "Продать", text: "Маркет", isActive: false },
  ]);
  const [inputs, setInputs] = useState([
    { id: 1, placeholder: "Цена"},
    { id: 2, placeholder: "Количество" },
    { id: 3, placeholder: "Всего" },
  ]);

  const [price, setPrice] = useState(0);

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
        <FormButtons>
          {buttons.map((button) => {
            return (
              <FormButtonBlock key={button.id}>
                <FormButton
                  active={button.isActive}
                  onClick={() => toggleActiveButton(button.id)}
                >
                  {button.name}
                </FormButton>
                <FormButtonBottom
                  className="form-span"
                  active={button.isActive}
                >
                  {button.text}
                </FormButtonBottom>
              </FormButtonBlock>
            );
          })}
        </FormButtons>
        <FormPrice>
          Цена: <FormPriceNum>{price} сом</FormPriceNum>
        </FormPrice>
        <FormInputFields>
          {inputs.map((input) => {
            return (
              <FormInputBlock key={input.id}>
                <FormInputField onChange={e => input.id === 1 ? setPrice(e.target.value) : null} type={"number"} placeholder={input.placeholder} />
                <FormInputSpan>сом</FormInputSpan>
              </FormInputBlock>
            );
          })}
          <FormButtonSubmit>Купить</FormButtonSubmit>
        </FormInputFields>
      </RightMenuSC>
    </>
  );
}

export default SaleForm;
