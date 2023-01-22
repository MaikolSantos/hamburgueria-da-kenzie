import React from "react";
import { ButtonPrimary } from "../../styles/Button";
import { Item } from "./styles";

function Card({ id, name, category, price, img, onClick }) {
  return (
    <Item id={id}>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <h3>{name}</h3>
        <span>{category}</span>
        <strong>R$ {price.toFixed(2)}</strong>
        <ButtonPrimary height="medium" onClick={onClick}>Adicionar</ButtonPrimary>
      </div>
    </Item>
  );
}

export default Card;
  