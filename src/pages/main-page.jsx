import React, { useState, useEffect, useContext } from "react";
import getCats from "../api/cats-api";
import CatsList from "../components/cats/cats";
import { Message, StyledSection } from "../components/cats/styles";
import { FavoriteCatsContext } from "../context/context";

function MainPage() {
  const [cats, setCats] = useState();
  const {favoriteCats, toggleFavoriteCat} = useContext(FavoriteCatsContext);

  useEffect(() => {
    getCats().then((data) => {
      setCats(data)
    })
  }, [])

  return (
    <StyledSection>
      <CatsList
        cats={cats}
        likedCats = {favoriteCats.map(cat => cat.id)}
        toggleFavoriteCat={toggleFavoriteCat}
        />
      <Message>... загружаем ещё котиков ...</Message>
    </StyledSection>
  );
}

export default MainPage;




// const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   try {
  //     setIsLoading(true);
  //     getCats().then((result) => {
  //       setCats(result)
  //       setIsLoading(false)
  //     })
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, [])

  //   <>
  //   {isLoading ? (
  //     <StyledSection>
  //       <Message>... загружаем котиков ...</Message>
  //     </StyledSection>
  //   ) : (
  //     <StyledSection>
  //     {cats && cats.length ? (
  //       <CatsList>
  //         {cats.map((cat) => (
  //           <Cat key={cat.id} cat={cat} />
  //         ))}
  //       </CatsList>
  //     ) : null}
  //     <Message>... загружаем еще котиков ...</Message>
  //   </StyledSection>
  //   )}
  //   </>
