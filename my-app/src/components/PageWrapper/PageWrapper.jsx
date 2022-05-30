import React from "react";
import Header from "../Header/Header";
import Cats from "../Cats/Cats";

function PageWrapper() {
  return (
    <>
    <Header />
    <main>
      <Cats />
    </main>
    </>
  );
}

export default PageWrapper;
