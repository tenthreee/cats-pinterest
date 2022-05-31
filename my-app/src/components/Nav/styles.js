import styled from "styled-components";

export const StyledNav = styled.nav`
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 60px;
  padding-right: 60px;

  @media (max-width: 767px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: 380px) {
    display: grid;
  }
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
