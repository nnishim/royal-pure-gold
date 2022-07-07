import styled from "styled-components";

export const IconSC = styled.svg`
  cursor: pointer;
  transition: 0.3s ease-in-out;
  fill: ${(props) => props.active ? '#e9dc3b' : '#f5f5f5'};
  :hover {
    fill: #e9dc3b;
  }
`;