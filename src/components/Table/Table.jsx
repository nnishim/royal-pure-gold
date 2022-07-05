import React, { useState } from "react";
import { Container } from "../../uikit/ContainerSC";
import TableItem from "../TableItem/TableItem";
import IconFourSVG from "./IconFourSVG";
import IconOneSVG from "./IconOneSVG";
import IconThreeSVG from "./IconThreeSVG";
import IconTwoSVG from "./IconTwoSVG";
import {
  TableContent,
  TableLeftImg,
  TableLeftLink,
  TableLeftMenu,
  TableRightLink,
  TableRightMenu,
  TableSC,
} from "./TableSC";

function Table() {
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
      links.map((link) => linkId !== link.id ? {...link, isActive: false} : linkId === link.id ? {...link, isActive: !link.isActive} : link)
    );
  };
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
            <TableItem/>
            <TableLeftMenu>
              <TableLeftLink>
                <IconOneSVG/>
              </TableLeftLink>
              <TableLeftLink>
                <IconTwoSVG/>
              </TableLeftLink>
              <TableLeftLink>
                <IconThreeSVG/>
              </TableLeftLink>
              <TableLeftLink>
                <IconFourSVG/>
              </TableLeftLink>
            </TableLeftMenu>
          </TableContent>
        </Container>
      </TableSC>
    </>
  );
}

export default Table;
