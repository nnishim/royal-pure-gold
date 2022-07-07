import React from "react";
import { FooterTable, FooterTableCol, FooterText, FooterTextBlock } from "../Footer/FooterSC";
import { TableColImg, TableColText } from "../TableItem/TableItemSC";

function FooterItemText() {
  return (
    <>
      <FooterTextBlock>
        <FooterText>Инструмент</FooterText>
        <FooterText>Количество</FooterText>
        <FooterText>Цена</FooterText>
      </FooterTextBlock>
      <FooterTable>
        <FooterTableCol>
          <TableColText notFlex>
            <TableColImg src="./images/tesla-img.png" />
            Tesla INC
          </TableColText>
          <TableColText notFlex green>1042.25</TableColText>
          <TableColText>1043$</TableColText>
        </FooterTableCol>
        <FooterTableCol>
          <TableColText notFlex>
            <TableColImg src="./images/tesla-img.png" />
            Tesla INC
          </TableColText>
          <TableColText notFlex green>1042.25</TableColText>
          <TableColText>1043$</TableColText>
        </FooterTableCol>
        <FooterTableCol>
          <TableColText notFlex>
            <TableColImg src="./images/tesla-img.png" />
            Tesla INC
          </TableColText>
          <TableColText notFlex green>1042.25</TableColText>
          <TableColText>1043$</TableColText>
        </FooterTableCol>
        <FooterTableCol>
          <TableColText notFlex>
            <TableColImg src="./images/tesla-img.png" />
            Tesla INC
          </TableColText>
          <TableColText notFlex green>1042.25</TableColText>
          <TableColText>1043$</TableColText>
        </FooterTableCol>
        <FooterTableCol>
          <TableColText notFlex>
            <TableColImg src="./images/tesla-img.png" />
            Tesla INC
          </TableColText>
          <TableColText notFlex green>1042.25</TableColText>
          <TableColText notFlex>1043$</TableColText>
        </FooterTableCol>
      </FooterTable>
    </>
  );
}

export default FooterItemText;
