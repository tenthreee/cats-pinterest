import styled from "styled-components";

export const StyledSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px;

  @media (max-width: 767px) {
    padding: 40px;
  }
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, 225px);
  gap: 40px;
`;

export const Message = styled.p`
  margin: 0;
  margin-top: 50px;
  text-align: center;
`;
