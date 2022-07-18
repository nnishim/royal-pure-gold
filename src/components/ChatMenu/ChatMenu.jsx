import React from 'react'
import {RightMenuSC} from '../../uikit/RightMenuSC'
import {
  ChatMenuButton,
  ChatMenuEmployeeLink,
  ChatMenuEmployeeMessage, ChatMenuField, ChatMenuInputField,
  ChatMenuLogo, ChatMenuLogoBlock, ChatMenuLogoText, ChatMenuMessage, ChatMenuSC,
} from "./ChatMenuSC";

function ChatMenu() {
  return (<>
    <RightMenuSC>
      <ChatMenuSC>
        <ChatMenuLogoBlock>
          <ChatMenuLogo src='./images/logo.png'/>
          <ChatMenuLogoText>ex.envoys.vision</ChatMenuLogoText>
        </ChatMenuLogoBlock>
        <ChatMenuMessage width='true'>Добрый день, хочу купить акции apple</ChatMenuMessage>
        <ChatMenuEmployeeMessage>Здравствуйте, перейдите по
          этой <ChatMenuEmployeeLink href='#'>ссылке</ChatMenuEmployeeLink></ChatMenuEmployeeMessage>
        <ChatMenuMessage>Спасибо)</ChatMenuMessage>
        <ChatMenuField>
          <ChatMenuInputField placeholder='Введите сообщение...'/>
          <ChatMenuButton>
            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.6115 2.61198L33.3045 17.843C33.4221 17.9077 33.5201 18.0028 33.5884 18.1184C33.6567 18.234 33.6928 18.3657 33.6928 18.5C33.6928 18.6342 33.6567 18.766 33.5884 18.8816C33.5201 18.9971 33.4221 19.0922 33.3045 19.157L5.6115 34.388C5.49731 34.4508 5.36872 34.4828 5.23841 34.4808C5.1081 34.4787 4.98056 34.4428 4.86836 34.3765C4.75617 34.3102 4.66319 34.2158 4.5986 34.1026C4.53401 33.9894 4.50002 33.8613 4.5 33.731V3.26898C4.50002 3.13865 4.53401 3.01057 4.5986 2.89738C4.66319 2.78419 4.75617 2.68978 4.86836 2.62346C4.98056 2.55714 5.1081 2.52121 5.23841 2.51919C5.36872 2.51718 5.49731 2.54916 5.6115 2.61198V2.61198ZM7.5 20V29.9255L28.275 18.5L7.5 7.07448V17H15V20H7.5Z"
                fill="#2E2E2E"/>
            </svg>
          </ChatMenuButton>
        </ChatMenuField>
      </ChatMenuSC>
    </RightMenuSC>
  </>)
}

export default ChatMenu