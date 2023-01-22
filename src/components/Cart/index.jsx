import React from "react";
import { Container, Title } from "./styles";

function Cart({ children }) {
  return (
    <Container>
      <Title>
        <h2>Carrinho de compras</h2>
      </Title>
      {children}
    </Container>
  );
}

export default Cart;
