import React, { useState } from "react";
import { Container } from "../../uikit/ContainerSC";
import { TableContent, TableRightLink, TableRightMenu, TableSC } from "./TableSC";

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
      links.map((link) => {
        for(let i = 0; i < links.length; i++){
            if(link.id !== linkId) {
              return {...link, isActive: false}
            }
          if(link.id === linkId) {
            return {...link, isActive: !link.isActive}
          }
        }
        return link;
      })
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
          </TableContent>
        </Container>
      </TableSC>
    </>
  );
}

export default Table;
