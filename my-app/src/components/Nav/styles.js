import styled from "styled-components";

export const StyledNavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const StyledNavLink = styled.a`
  display: block;
  padding: 20px;
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #1E88E5;
  }
`;
