import styled from "styled-components";

export const SearchSC = styled.div`
  margin-bottom: 30px;
`;
export const SearchContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SearchLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const SearchLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) =>
    props.active ? '#000' : "#f5f5f5"};
  cursor: pointer;
  border-radius: 10px;
  transition: .3s ease-in-out;
  background: ${(props) =>
    props.active ? '#E9DC3B' : "none"};
  :hover{
    background: #e9dc3b;
    color: #000;
  }
  :hover span{
    color: #000;
  }
`;
export const SearchLinkSpan = styled.span`
  font-weight: 700;
  transition: .3s ease-in-out;
  color: ${(props) =>
    props.active ? '#000' : "#e9dc3b"};
`;
export const SearchInputBlock = styled.div`
  max-width: 213px;
  min-height: 44px;
  position: relative;
`;
export const SearchInput = styled.input`
  width: 100%;
  background: #2e2e2e;
  border-radius: 10px;
  padding: 12px 10px;
  border: none;
  color: #f5f5f5;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #f5f5f5;
  }
`;
export const SearchIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;
