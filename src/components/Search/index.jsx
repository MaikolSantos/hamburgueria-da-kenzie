import React from "react";
import { ButtonPrimary } from "../../styles/Button";
import { Container } from "./styles";

function Search({ valueInput, onClick }) {
  return (
    <Container>
      <h2>
        Resultados para: <span>{valueInput}</span>
      </h2>
      <ButtonPrimary onClick={onClick} height="medium">
        Limpar Busca
      </ButtonPrimary>
    </Container>
  );
}

export default Search;
