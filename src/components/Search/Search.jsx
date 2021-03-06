import React, {useEffect, useState} from "react";
import {Container} from "../../uikit/ContainerSC";
import {
  SearchContent, SearchIcon, SearchInput, SearchInputBlock, SearchLink, SearchLinks, SearchLinkSpan, SearchSC,
} from "./SearchSC";
import {Link} from "react-router-dom";

function Search({tableCount}) {
  const [links, setLinks] = useState([{id: 1, name: "Акции", href: '/stock', count: 50, isActive: false}, {
    id: 2, name: "Облигации", href: '/obligation' ,count: 0, isActive: false
  }, {id: 3, name: "Фонды", href: '/fonds', count: 1, isActive: false},]);
  // useEffect(() => {
  //   setLinks(links => links.map((link, i) => {
  //     if(i === 0){
  //       return {...link, count: tableCount}
  //     }
  //     return link
  //   }))
  // })
  const toggleActive = (linkId) => {
    setLinks((links) => links.map((link) => linkId !== link.id ? {
      ...link, isActive: false
    } : linkId === link.id ? {...link, isActive: !link.isActive} : link));
  };
  return (<>
    <SearchSC>
      <Container>
        <SearchContent>
          <SearchLinks>
            {links.map((link) => (<React.Fragment key={link.id}>
              <Link to={link.href}>
                <SearchLink
                  active={link.isActive}
                  onClick={() => toggleActive(link.id)}
                >
                  {link.name} -{" "}
                  <SearchLinkSpan active={link.isActive}>
                    {link.count}
                  </SearchLinkSpan>
                </SearchLink>
              </Link>
            </React.Fragment>))}

          </SearchLinks>
          <SearchInputBlock>
            <SearchInput placeholder="Поиск"/>
            <SearchIcon>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071V18.071Z"
                  fill="#F5F5F5"
                />
              </svg>
            </SearchIcon>
          </SearchInputBlock>
        </SearchContent>
      </Container>
    </SearchSC>
  </>);
}

export default Search;
