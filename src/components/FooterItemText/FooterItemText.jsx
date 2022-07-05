import React from "react";
import { FooterTable, FooterTableCol, FooterText, FooterTextBlock } from "../Footer/FooterSC";
import { TableColImg, TableColText } from "../TableItem/TableItemSC";

function FooterItemText() {
  return (
    <>
      <FooterTextBlock>
        <FooterText>Инструмент</FooterText>
        <FooterText>Количествоя</FooterText>
        <FooterText>Цена</FooterText>
      </FooterTextBlock>
      <FooterTable>
        <FooterTableCol>
          <TableColText>
            <TableColImg src="./images/tesla-img.png" />
            Tesla INC
          </TableColText>
          <TableColText green>1042.25</TableColText>
          <TableColText>1043$</TableColText>
        </FooterTableCol>
        <FooterTableCol>
          <TableColText>
            <TableColImg src="./images/tesla-img.png" />
            Tesla INC
          </TableColText>
          <TableColText green>1042.25</TableColText>
          <TableColText>1043$</TableColText>
        </FooterTableCol>
        <FooterTableCol>
          <TableColText>
            <TableColImg src="./images/tesla-img.png" />
            Tesla INC
          </TableColText>
          <TableColText green>1042.25</TableColText>
          <TableColText>1043$</TableColText>
        </FooterTableCol>
        <FooterTableCol>
          <TableColText>
            <TableColImg src="./images/tesla-img.png" />
            Tesla INC
          </TableColText>
          <TableColText green>1042.25</TableColText>
          <TableColText>1043$</TableColText>
        </FooterTableCol>
        <FooterTableCol>
          <TableColText>
            <TableColImg src="./images/tesla-img.png" />
            Tesla INC
          </TableColText>
          <TableColText green>1042.25</TableColText>
          <TableColText>1043$</TableColText>
        </FooterTableCol>
      </FooterTable>
    </>
  );
}

export default FooterItemText;
