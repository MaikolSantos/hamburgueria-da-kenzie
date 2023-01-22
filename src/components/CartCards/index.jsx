import React from "react";
import { Item } from "./styles";

function CartCard({ img, name, category, onClick }) {
  return (
    <Item>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <h3>{name}</h3>
        <span>{category}</span>
      </div>
      <p onClick={onClick}>Remover</p>
    </Item>
  );
}

export default CartCard;
