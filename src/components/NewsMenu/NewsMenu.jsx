import React from "react";
import { useState } from "react";
import { RightMenuSC } from "../../uikit/RightMenuSC";
import {
  NewsMenuItem,
  NewsMenuItemBottom,
  NewsMenuItemDate,
  NewsMenuItemDesc,
  NewsMenuItemlink,
  NewsMenuSC,
} from "./NewsMenuSC";

function NewsMenu() {
  const [news, setNews] =
    useState([
      {
        id: 1,
        desc: "Tesla, Block и Blockstream займутся майнингом биткоина на солнечной энергии",
        date: "13.04.2022",
      },
      {
        id: 2,
        desc: "Tesla, Block и Blockstream займутся майнингом биткоина на солнечной энергии",
        date: "13.04.2022",
      },
      {
        id: 3,
        desc: "Tesla, Block и Blockstream займутся майнингом биткоина на солнечной энергии",
        date: "13.04.2022",
      },
      {
        id: 4,
        desc: "Tesla, Block и Blockstream займутся майнингом биткоина на солнечной энергии",
        date: "13.04.2022",
      },
      {
        id: 5,
        desc: "Tesla, Block и Blockstream займутся майнингом биткоина на солнечной энергии",
        date: "13.04.2022",
      },
    ])

  return (
    <>
      <RightMenuSC>
        <NewsMenuSC>
          {news.map((newsItem) => {
            return (
              <NewsMenuItem key={newsItem.id}>
                <NewsMenuItemDesc>
                  {newsItem.desc}
                </NewsMenuItemDesc>
                <NewsMenuItemBottom>
                  <NewsMenuItemlink>
                    Подробнее
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
                  </NewsMenuItemlink>
                  <NewsMenuItemDate>{newsItem.date}</NewsMenuItemDate>
                </NewsMenuItemBottom>
              </NewsMenuItem>
            );
          })}
        </NewsMenuSC>
      </RightMenuSC>
    </>
  );
}

export default NewsMenu;
