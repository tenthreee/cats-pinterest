import React from "react";
import Header from "../header/header";

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
