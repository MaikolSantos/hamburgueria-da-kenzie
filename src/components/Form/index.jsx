import React from "react";
import { Container } from "./styles";

function Form({ onSubmit, children }) {
  return (
    <Container onSubmit={onSubmit}>
      {children}
    </Container>
  );
}

export default Form;
