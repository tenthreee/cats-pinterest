import styled from "styled-components";
import FavImage from "../../assets/icon-favorite.svg";
import FavImageFull from "../../assets/icon-favorite-hover.svg";
import FavImageActive from "../../assets/icon-favorite-active.svg";

export const StyledButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;

  padding: 0;
  width: 40px;
  height: 37px;
  display: none;

  border: none;
  background-color: transparent;
  background-image: url(${FavImage});

  &:hover {
    cursor: pointer;
    background-image: url(${FavImageFull});
  }
`;

export const StyledButtonActive = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;

  padding: 0;
  width: 40px;
  height: 37px;
  display: none;

  border: none;
  background-color: transparent;
  background-image: url(${FavImageActive});

  &:hover {
    cursor: pointer;
    background-image: url(${FavImageFull});
  }
`;

export const CatCard = styled.li`
  position: relative;
  width: 225px;
  height: 225px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
  }

  &:hover ${StyledButton},
  &:hover ${StyledButtonActive} {
    display: block;
  }
`;

export const CatImage = styled.img`
  max-width: 225px;
  max-height: 225px;
  height: 100%;
  object-fit: cover;
`;
