import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/images/logo.png";

function Header({ children }) {
  return (
    <Container>
      <div>
        <img src={Logo} alt="Logo Burguer Kenzie" />
        {children}
      </div>
    </Container>
  );
}

export default Header;
