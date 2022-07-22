import React, {useEffect, useState} from "react";
import {
  Modal,
  TableCol,
  TableColImg,
  TableColText,
  TableColTitle,
  TableItemSC,
  TableTitles,
} from "./TableItemSC";
import Diagram from "../../Diagram/Diagram";


function TableItem({setTableCount}) {
  const tableInfo = [
    {
      id: 1,
      img: './images/tesla-img.png',
      name: "Tesla INC",
      ticket: "TSLA.US",
      buy: 1042.25,
      sale: 1043,
      market: 1042.5,
      date: "06.04.2022",
    },
    {
      id: 2,
      img: './images/tesla-img.png',
      name: "Tesla INC",
      ticket: "TSLA.US",
      buy: 1042.25,
      sale: 1043,
      market: 1042.5,
      date: "06.04.2022",
    },
    {
      id: 3,
      img: './images/tesla-img.png',
      name: "Tesla INC",
      ticket: "TSLA.US",
      buy: 1042.25,
      sale: 1043,
      market: 1042.5,
      date: "06.04.2022",
    },
    {
      id: 4,
      img: './images/tesla-img.png',
      name: "Tesla INC",
      ticket: "TSLA.US",
      buy: 1042.25,
      sale: 1043,
      market: 1042.5,
      date: "06.04.2022",
    },
    {
      id: 5,
      img: './images/tesla-img.png',
      name: "Tesla INC",
      ticket: "TSLA.US",
      buy: 1042.25,
      sale: 1043,
      market: 1042.5,
      date: "06.04.2022",
    },
    {
      id: 6,
      img: './images/tesla-img.png',
      name: "Tesla INC",
      ticket: "TSLA.US",
      buy: 1042.25,
      sale: 1043,
      market: 1042.5,
      date: "06.04.2022",
    },
    {
      id: 7,
      img: './images/tesla-img.png',
      name: "Tesla INC",
      ticket: "TSLA.US",
      buy: 1042.25,
      sale: 1043,
      market: 1042.5,
      date: "06.04.2022",
    },
    {
      id: 8,
      img: './images/tesla-img.png',
      name: "Tesla INC",
      ticket: "TSLA.US",
      buy: 1042.25,
      sale: 1043,
      market: 1042.5,
      date: "06.04.2022",
    },
    {
      id: 9,
      img: './images/tesla-img.png',
      name: "Tesla INC",
      ticket: "TSLA.US",
      buy: 1042.25,
      sale: 1043,
      market: 1042.5,
      date: "06.04.2022",
    },
    {
      id: 10,
      img: './images/tesla-img.png',
      name: "Tesla INC",
      ticket: "TSLA.US",
      buy: 1042.25,
      sale: 1043,
      market: 1042.5,
      date: "06.04.2022",
    },
    {
      id: 11,
      img: './images/tesla-img.png',
      name: "Tesla INC",
      ticket: "TSLA.US",
      buy: 1042.25,
      sale: 1043,
      market: 1042.5,
      date: "06.04.2022",
    },
    {
      id: 12,
      img: './images/tesla-img.png',
      name: "Tesla INC",
      ticket: "TSLA.US",
      buy: 1042.25,
      sale: 1043,
      market: 1042.5,
      date: "06.04.2022",
    },
  ];
  useEffect(() => setTableCount(tableInfo.length))
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <TableItemSC>
        <TableTitles>
          <TableColTitle>Наименование</TableColTitle>
          <TableColTitle>Тикет</TableColTitle>
          <TableColTitle>Покупка</TableColTitle>
          <TableColTitle>Продажа</TableColTitle>
          <TableColTitle>Рыночная цена</TableColTitle>
          <TableColTitle>Время сделки</TableColTitle>
        </TableTitles>
        {tableInfo.map((tableItem) => (
          <TableCol onClick={() => setIsActive(true)}  key={tableItem.id}>
            <TableColText>
              <TableColImg src={tableItem.img}/>
              {tableItem.name}
            </TableColText>
            <TableColText uppercase>{tableItem.ticket}</TableColText>
            <TableColText green>{tableItem.buy}</TableColText>
            <TableColText red>{tableItem.sale}</TableColText>
            <TableColText>{tableItem.market}</TableColText>
            <TableColText>{tableItem.date}</TableColText>
          </TableCol>
        ))}
          <Modal active={isActive} onClick={() => setIsActive(false)}>
            <Diagram active={isActive} />
          </Modal>
      </TableItemSC>
    </>
  );
}

export default TableItem;
