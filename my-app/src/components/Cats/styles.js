import styled from "styled-components";

export const StyledSection = styled.section`
  padding-top: 50px;
  padding-left: 60px;
  padding-right: 60px;
`;

export const CatsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
`;
