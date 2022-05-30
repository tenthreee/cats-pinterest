import React, {useState, useEffect} from "react";
import { StyledSection, CatsList } from "./styles";
import Cat from "../Cat/Cat";
import getCats from "../../api/catsApi";

function Cats() {
  const [cats, setCats] = useState();

  useEffect(() => {
    getCats().then((result) => {
      setCats(result)
      console.log(result)
    })
  }, [])

  return (
    <StyledSection>
      {cats && cats.length ? (
        <CatsList>
          {cats.map((cat) => (
            <Cat key={cat.id} cat={cat} />
          ))}
        </CatsList>
      ) : null}
    </StyledSection>
  )
}

export default Cats;
