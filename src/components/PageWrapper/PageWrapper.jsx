import React from "react";
import Header from "../Header/Header";

function PageWrapper({children}) {
  return (
    <>
    <Header />
    <main>
      {children}
    </main>
    </>
  );
}

export default PageWrapper;
