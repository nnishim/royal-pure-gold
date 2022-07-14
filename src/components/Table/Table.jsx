import React, { useState } from "react";
import { Container } from "../../uikit/ContainerSC";
import TableItem from "../TableItem/TableItem";
import IconOneSVG from "./Icons/IconFourSVG";
import IconFourSVG from "./Icons/IconOneSVG";
import IconThreeSVG from "./Icons/IconThreeSVG";
import IconTwoSVG from "./Icons/IconTwoSVG";
import {
  TableContent,
  TableLeftImg,
  TableLeftLink,
  TableLeftMenu,
  TableRightLink,
  TableRightMenu,
  TableSC,
  Tooltip,
} from "./TableSC";

function Table({ setTableCount }) {
  const [links, setLinks] = useState([
    { id: 1, name: "Кыргызстан", isActive: false },
    { id: 2, name: "США", isActive: false },
    { id: 3, name: "Европа", isActive: false },
    { id: 4, name: "Азия", isActive: false },
    { id: 5, name: "Криптовалюты", isActive: false },
    { id: 6, name: "Драг-Металлы", isActive: false },
    { id: 7, name: "Валютный рынок", isActive: false },
  ]);

  const toggleActive = (linkId) => {
    setLinks((links) =>
      links.map((link) =>
        linkId !== link.id
          ? { ...link, isActive: false }
          : linkId === link.id
          ? { ...link, isActive: !link.isActive }
          : link
      )
    );
  };

  const [icons, setIcons] = useState([
    { id: 1, img: <IconOneSVG />, text: "Спот", isActive: false },
    { id: 2, img: <IconTwoSVG />, text: "Спот", isActive: false },
    { id: 3, img: <IconThreeSVG />, text: "Спот", isActive: false },
    { id: 4, img: <IconFourSVG />, text: "Спот", isActive: false },
  ]);
  // const toggleActiveIcon = (iconId) => {
  //   setIcons((icons) =>
  //     icons.map((icon) =>
  //       iconId !== icon.id
  //         ? { ...icon, isActive: false }
  //         : iconId === icon.id
  //         ? { ...icon, isActive: !icon.isActive }
  //         : icon
  //     )
  //   );
  // };

  return (
    <>
      <TableSC>
        <Container>
          <TableContent>
            <TableRightMenu>
              {links.map((link) => (
                <React.Fragment key={link.id}>
                  <TableRightLink
                    active={link.isActive}
                    onClick={() => toggleActive(link.id)}
                  >
                    {link.name}
                  </TableRightLink>
                </React.Fragment>
              ))}
            </TableRightMenu>
            <TableItem setTableCount={setTableCount} />
            <TableLeftMenu>
              <TableLeftLink>
                <Tooltip>Спот</Tooltip>
                <IconOneSVG />
              </TableLeftLink>
              <TableLeftLink>
                <Tooltip>Спот</Tooltip>
                <IconTwoSVG />
              </TableLeftLink>
              <TableLeftLink>
                <Tooltip>Спот</Tooltip>
                <IconThreeSVG />
              </TableLeftLink>
              <TableLeftLink>
                <Tooltip>Спот</Tooltip>
                <IconFourSVG />
              </TableLeftLink>
            </TableLeftMenu>
          </TableContent>
        </Container>
      </TableSC>
    </>
  );
}

export default Table;
