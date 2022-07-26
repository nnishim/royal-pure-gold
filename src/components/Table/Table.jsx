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
import {ClickAwayListener} from "@mui/material";

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

  const [menuLinks, setMenuLinks] = useState([
    {id: 1, href: '/sale'},
    {id: 2, href: '/chat'},
    {id: 3, href: '/news'},
    {id: 4, href: '/bank'},
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
  const handleClickAway = () => {
    setMenuLinks(state => ({
      ...state,
        href: '/'
    }))
  };
  // const toggleIconActive = (iconId) => {
  //   setIcons((icons) =>
  //     icons.map((icon) =>
  //       iconId !== icon.id
  //         ? {...icon, isActive: false}
  //         :  iconId === icon.id
  //           ? {...icon, isActive: !icon.isActive}
  //           : icon
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
            <TableItem setTableCount={setTableCount}/>
            {/*<TableLeftMenu>*/}
            {/*  {icons.map((icon) => {*/}
            {/*    return (*/}
            {/*      <TableLeftLink key={icon.id}>*/}
            {/*        <Tooltip>{icon.text}</Tooltip>*/}
            {/*        <Icon src={icon.img}/>*/}
            {/*      </TableLeftLink>*/}
            {/*    )*/}
            {/*  })}*/}
            {/*</TableLeftMenu>*/}
            <TableLeftMenu>
              <ClickAwayListener onClickAway={handleClickAway}>
                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to={menuLinks[0].href}>
                  <TableLeftLink>
                    <Tooltip>Спот</Tooltip>
                    <IconOneSVG/>
                  </TableLeftLink>
                </NavLink>
              </ClickAwayListener>
              <ClickAwayListener onClickAway={handleClickAway}>

                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to={menuLinks[1].href}>
                  <TableLeftLink>
                    <Tooltip>Спот</Tooltip>
                    <IconTwoSVG/>
                  </TableLeftLink>
                </NavLink>
              </ClickAwayListener>
              <ClickAwayListener onClickAway={handleClickAway}>

                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to={menuLinks[2].href}>
                  <TableLeftLink>
                    <Tooltip>Спот</Tooltip>
                    <IconThreeSVG/>
                  </TableLeftLink>
                </NavLink>
              </ClickAwayListener>
              <ClickAwayListener onClickAway={handleClickAway}>

                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to={menuLinks[3].href}>
                  <TableLeftLink>
                    <Tooltip>Спот</Tooltip>
                    <IconFourSVG/>
                  </TableLeftLink>
                </NavLink>
              </ClickAwayListener>
            </TableLeftMenu>
          </TableContent>
        </Container>
      </TableSC>
    </>
  )
    ;
}

export default Table;
