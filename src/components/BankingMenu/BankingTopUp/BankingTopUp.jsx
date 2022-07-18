import React from "react";
import { useState } from "react";
import {
  BankingTopUpButton,
  BankingTopUpItem,
  BankingTopUpItemYellow,
  BankingTopUpList,
  BankingTopUpSC,
  BankingTopUpTitle,
} from "./BankingTopUpSC";

function BankingTopUp() {
  return (
    <>
      <BankingTopUpSC>
        <BankingTopUpTitle>Купить за СОМ</BankingTopUpTitle>
        <BankingTopUpList>
          <BankingTopUpItem>
            OcOO{" "}
            <BankingTopUpItemYellow line>"Бизнес Софт"</BankingTopUpItemYellow>
          </BankingTopUpItem>
          <BankingTopUpItem>
            Ramada by{" "}
            <BankingTopUpItemYellow line>
              Wyndam Bishkek Centre
            </BankingTopUpItemYellow>
            , каб.508
          </BankingTopUpItem>
          <BankingTopUpItem>
            ИНН: <BankingTopUpItemYellow>3546576879809</BankingTopUpItemYellow>
          </BankingTopUpItem>
          <BankingTopUpItem>
            <BankingTopUpItemYellow>УГНС 001</BankingTopUpItemYellow>{" "}
            Октябрьского района
          </BankingTopUpItem>
          <BankingTopUpItem>
            р/с:{" "}
            <BankingTopUpItemYellow line>6756859459687</BankingTopUpItemYellow> в
            ОАО "Бакай Банк"
          </BankingTopUpItem>
          <BankingTopUpItem>
            БИК <BankingTopUpItemYellow>2345678</BankingTopUpItemYellow>
          </BankingTopUpItem>
          <BankingTopUpItem>
            Тел:{" "}
            <BankingTopUpItemYellow line>+996552708701</BankingTopUpItemYellow>
          </BankingTopUpItem>
          <BankingTopUpItem>
            <BankingTopUpItemYellow line>
              kbegaim@gmail.com
            </BankingTopUpItemYellow>
          </BankingTopUpItem>
        </BankingTopUpList>
        <BankingTopUpButton>
          Клиринговый счет{" "}
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7817 7.83333L7.20566 4.25733L8.14833 3.31467L13.3337 8.5L8.14833 13.6853L7.20566 12.7427L10.7817 9.16667H2.66699V7.83333H10.7817Z"
              fill="#E9DC3B"
            />
          </svg>
        </BankingTopUpButton>
      </BankingTopUpSC>
    </>
  );
}

export default BankingTopUp;
