import React, { useState } from "react";
import { Container } from "../../uikit/ContainerSC";
import {
  SearchContent,
  SearchIcon,
  SearchInput,
  SearchInputBlock,
  SearchLink,
  SearchLinks,
  SearchLinkSpan,
  SearchSC,
} from "./SearchSC";

function Search() {
  // const [active, setActive] = useState(false);
  // const toggleActive = () => {
  //   setActive(!active);
  // };

  const [links, setLinks] = useState([
    { id: 1, name: "Акции", count: 50, isActive: false },
    { id: 2, name: "Облигации", count: 0, isActive: false },
    { id: 3, name: "Фонды", count: 1, isActive: false },
  ]);

  const toggleActive = (linkId) => {
    setLinks(links => links.map(link => {
      if(link.id === linkId) {
        return {...link, isActive: !link.isActive}
      }

      return link
    }));
  };

  return (
    <>
      <SearchSC>
        <Container>
          <SearchContent>
            <SearchLinks>
              {links.map((link) => (
                <React.Fragment key={link.id}>
                  <SearchLink active={link.isActive} onClick={() => toggleActive(link.id)}>
                    {link.name} -{" "}
                    <SearchLinkSpan active={link.isActive}>
                      {link.count}
                    </SearchLinkSpan>
                  </SearchLink>
                </React.Fragment>
              ))}
            </SearchLinks>
            <SearchInputBlock>
              <SearchInput placeholder="Поиск" />
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
    </>
  );
}

export default Search;
