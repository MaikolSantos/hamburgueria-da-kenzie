import React from "react";
import { ButtonGrey } from "../../styles/Button";
import { Contianer } from "./styles";

function Total({ total, onClick }) {
  return (
    <Contianer>
      <div>
        <p>Total</p>
        <span>R$ {total.toFixed(2)}</span>
      </div>
        <ButtonGrey onClick={onClick}>Remover Todos</ButtonGrey>
    </Contianer>
  );
}

export default Total;
