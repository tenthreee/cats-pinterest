import React from "react";
import { StyledNavList, StyledNavLink } from "./styles";

function Nav() {
  return (
    <nav>
      <StyledNavList>
        <li>
          <StyledNavLink href="/">Все котики</StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/favorite">Любимые котики</StyledNavLink>
        </li>
      </StyledNavList>
    </nav>
  );
}

export default Nav;
