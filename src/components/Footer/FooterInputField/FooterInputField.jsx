import React from "react";
import { InputFieldInput, InputFieldOption, InputFieldSC, InputFieldSelec,FooterCheckox, FooterCheckoxContainer, FooterChecmark, InputFieldWrap, InputFieldCheckboxes, InputFieldBottom, InputFieldFile, InputFieldButton } from "./FooterInputFieldSC";

function FooterInputField() {
  return (
    <>
      <InputFieldWrap>
        <InputFieldSC>
          <InputFieldSelec name="setting">
            <InputFieldOption value="Инструмент">Инструмент</InputFieldOption>
            <InputFieldOption value="Инструмент">Инструмент</InputFieldOption>
            <InputFieldOption value="Инструмент">Инструмент</InputFieldOption>
            <InputFieldOption value="Инструмент">Инструмент</InputFieldOption>
            <InputFieldOption value="Инструмент">Инструмент</InputFieldOption>
          </InputFieldSelec>
        </InputFieldSC>
        <InputFieldSC>
          <InputFieldInput placeholder='Количество' type='number' arrow />
        </InputFieldSC>
        <InputFieldSC>
          <InputFieldInput placeholder="Основание"/>
        </InputFieldSC>
        <InputFieldBottom>
          <InputFieldCheckboxes> 
            <FooterCheckoxContainer>Обычное
              <FooterCheckox type="checkbox"/>
              <FooterChecmark></FooterChecmark>
            </FooterCheckoxContainer>
            <FooterCheckoxContainer>Срочное
              <FooterCheckox type="checkbox"/>
              <FooterChecmark></FooterChecmark>
            </FooterCheckoxContainer>
          </InputFieldCheckboxes>
          <InputFieldFile type='file'/>
        </InputFieldBottom>
        <InputFieldButton>Купить</InputFieldButton>
      </InputFieldWrap>
    </>
  );
}

export default FooterInputField;
