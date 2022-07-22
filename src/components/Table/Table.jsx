import React, {useState} from "react";
import {Container} from "../../uikit/ContainerSC";
import TableItem from "./TableItem/TableItem";
import IconOneSVG from "./Icons/IconFourSVG";
import IconFourSVG from "./Icons/IconOneSVG";
import IconThreeSVG from "./Icons/IconThreeSVG";
import IconTwoSVG from "./Icons/IconTwoSVG";
import {
  Icon,
  TableContent,
  TableLeftLink,
  TableLeftMenu,
  TableRightLink,
  TableRightMenu,
  TableSC,
  Tooltip,
} from "./TableSC";
import './Table.css'
import {Link, NavLink} from "react-router-dom";

function Table({setTableCount}) {
  const [links, setLinks] = useState([
    {id: 1, name: "Кыргызстан", isActive: false},
    {id: 2, name: "США", isActive: false},
    {id: 3, name: "Европа", isActive: false},
    {id: 4, name: "Азия", isActive: false},
    {id: 5, name: "Криптовалюты", isActive: false},
    {id: 6, name: "Драг-Металлы", isActive: false},
    {id: 7, name: "Валютный рынок", isActive: false},
  ]);

  const [icons, setIcons] = useState([
    {id: 1, img: './images/left-menu-icon1.svg', isActive: false, text: 'Спот'},
    {id: 2, img: './images/left-menu-icon2.svg', isActive: false, text: 'Спот'},
    {id: 3, img: './images/left-menu-icon3.svg', isActive: false, text: 'Спот'},
    {id: 4, img: './images/left-menu-icon4.svg', isActive: false, text: 'Спот'},
  ])

  const toggleActive = (linkId) => {
    setLinks((links) =>
      links.map((link) =>
        linkId !== link.id
          ? {...link, isActive: false}
          : linkId === link.id
            ? {...link, isActive: !link.isActive}
            : link
      )
    );
  };
  const toggleIconActive = (iconId) => {
    setIcons((icons) =>
      icons.map((icon) =>
        iconId !== icon.id
          ? {...icon, isActive: false}
          :  iconId === icon.id
            ? {...icon, isActive: !icon.isActive}
            : icon
      )
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
            <TableItem setTableCount={setTableCount}/>
            <TableLeftMenu>
              {icons.map((icon) => {
                return (
                  <TableLeftLink key={icon.id}>
                    <Tooltip>{icon.text}</Tooltip>
                    <Icon src={icon.img}/>
                  </TableLeftLink>
                )
              })}
            </TableLeftMenu>
            {/*<TableLeftMenu>*/}
            {/*  <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/sale'>*/}
            {/*    <TableLeftLink>*/}
            {/*      <Tooltip>Спот</Tooltip>*/}
            {/*      <IconOneSVG/>*/}
            {/*    </TableLeftLink>*/}
            {/*  </NavLink>*/}

            {/*  <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/chat'>*/}
            {/*    <TableLeftLink>*/}
            {/*      <Tooltip>Спот</Tooltip>*/}
            {/*      <IconTwoSVG/>*/}
            {/*    </TableLeftLink>*/}
            {/*  </NavLink>*/}
            {/*  <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/news'>*/}
            {/*    <TableLeftLink>*/}
            {/*      <Tooltip>Спот</Tooltip>*/}
            {/*      <IconThreeSVG/>*/}
            {/*    </TableLeftLink>*/}
            {/*  </NavLink>*/}
            {/*  <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/bank'>*/}
            {/*    <TableLeftLink>*/}
            {/*      <Tooltip>Спот</Tooltip>*/}
            {/*      <IconFourSVG/>*/}
            {/*    </TableLeftLink>*/}
            {/*  </NavLink>*/}
            {/*</TableLeftMenu>*/}
          </TableContent>
        </Container>
      </TableSC>
    </>
  )
    ;
}

export default Table;
